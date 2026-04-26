
-- Family groups: a missionary creates one; family members join via code + last name.
CREATE TABLE public.family_groups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  owner_user_id UUID NOT NULL,
  family_code TEXT NOT NULL UNIQUE,
  last_name TEXT NOT NULL,
  mission_pin_id UUID REFERENCES public.mission_pins(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.family_groups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Family groups are viewable by everyone"
  ON public.family_groups FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create their family group"
  ON public.family_groups FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = owner_user_id);

CREATE POLICY "Owner can update their family group"
  ON public.family_groups FOR UPDATE TO authenticated
  USING (auth.uid() = owner_user_id)
  WITH CHECK (auth.uid() = owner_user_id);

CREATE POLICY "Owner can delete their family group"
  ON public.family_groups FOR DELETE TO authenticated
  USING (auth.uid() = owner_user_id);

CREATE TRIGGER trg_family_groups_updated_at
  BEFORE UPDATE ON public.family_groups
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Family members (max 7 per group). No tight security: code + last name is enough.
CREATE TABLE public.family_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  group_id UUID NOT NULL REFERENCES public.family_groups(id) ON DELETE CASCADE,
  display_name TEXT NOT NULL,
  relationship TEXT NOT NULL DEFAULT 'family',
  hometown_city TEXT,
  hometown_country TEXT,
  hometown_lat DOUBLE PRECISION,
  hometown_lng DOUBLE PRECISION,
  is_missionary BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_family_members_group ON public.family_members(group_id);

ALTER TABLE public.family_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Family members are viewable by everyone"
  ON public.family_members FOR SELECT USING (true);

CREATE POLICY "Anyone can join a family group"
  ON public.family_members FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Group owner can remove members"
  ON public.family_members FOR DELETE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.family_groups g
      WHERE g.id = family_members.group_id AND g.owner_user_id = auth.uid()
    )
  );

-- Enforce the 7-member cap.
CREATE OR REPLACE FUNCTION public.enforce_family_member_cap()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  member_count INT;
BEGIN
  SELECT COUNT(*) INTO member_count FROM public.family_members WHERE group_id = NEW.group_id;
  IF member_count >= 7 THEN
    RAISE EXCEPTION 'Family group is full (max 7 members).';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_family_members_cap
  BEFORE INSERT ON public.family_members
  FOR EACH ROW EXECUTE FUNCTION public.enforce_family_member_cap();
