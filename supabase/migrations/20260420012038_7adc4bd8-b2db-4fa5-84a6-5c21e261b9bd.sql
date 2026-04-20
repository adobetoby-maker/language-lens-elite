-- Library books table for cloud-synced custom uploads
CREATE TABLE public.library_books (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL DEFAULT '',
  language TEXT NOT NULL,
  target_label TEXT NOT NULL,
  flag TEXT NOT NULL DEFAULT '📖',
  section TEXT NOT NULL DEFAULT 'custom',
  available BOOLEAN NOT NULL DEFAULT true,
  chapters JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_library_books_user_id ON public.library_books(user_id);
CREATE INDEX idx_library_books_created_at ON public.library_books(created_at DESC);

ALTER TABLE public.library_books ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own library books"
  ON public.library_books FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own library books"
  ON public.library_books FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own library books"
  ON public.library_books FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own library books"
  ON public.library_books FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Reuse / create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_library_books_updated_at
BEFORE UPDATE ON public.library_books
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();