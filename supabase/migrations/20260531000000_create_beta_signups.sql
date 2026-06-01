CREATE TABLE IF NOT EXISTS public.beta_signups (
  email         text PRIMARY KEY,
  module_id     text,
  call_count    integer NOT NULL DEFAULT 0,
  captured_at   timestamptz NOT NULL DEFAULT now()
);

-- Service role can read/write; anon cannot read
ALTER TABLE public.beta_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "service_role_full_access"
  ON public.beta_signups
  USING (true)
  WITH CHECK (true);
