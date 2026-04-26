-- Anonymous opt-in mission pin sharing.
-- Each row represents a missionary's serving + hometown locations,
-- shown anonymously on a public map for connection-building.
CREATE TABLE public.mission_pins (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  mission_id TEXT NOT NULL,
  mission_name TEXT NOT NULL,
  mission_lat DOUBLE PRECISION NOT NULL,
  mission_lng DOUBLE PRECISION NOT NULL,
  hometown_city TEXT NOT NULL,
  hometown_country TEXT NOT NULL,
  hometown_lat DOUBLE PRECISION,
  hometown_lng DOUBLE PRECISION,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id)
);

ALTER TABLE public.mission_pins ENABLE ROW LEVEL SECURITY;

-- Anyone (even logged out) can view shared pins on the map.
-- They are anonymous: no name or user_id is shown in the UI.
CREATE POLICY "Mission pins are viewable by everyone"
ON public.mission_pins FOR SELECT
USING (true);

-- Authenticated users may insert / update / delete only their own pin.
CREATE POLICY "Users can insert their own mission pin"
ON public.mission_pins FOR INSERT TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own mission pin"
ON public.mission_pins FOR UPDATE TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own mission pin"
ON public.mission_pins FOR DELETE TO authenticated
USING (auth.uid() = user_id);

CREATE TRIGGER update_mission_pins_updated_at
BEFORE UPDATE ON public.mission_pins
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_mission_pins_mission_id ON public.mission_pins(mission_id);