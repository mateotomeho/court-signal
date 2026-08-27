-- CourtSignal seed data

insert into public.courts (
  slug,
  name,
  address,
  latitude,
  longitude,
  total_courts,
  neighbourhood,
  map_x_percent,
  map_y_percent
)
values
  (
    'mancini-park',
    'Mancini Park',
    '110 Mancini Way',
    45.270857,
    -75.733280,
    2,
    'Barrhaven',
    52,
    42
  ),
  (
    'half-moon-bay-park',
    'Half Moon Bay Park',
    '3525 Cambrian Road',
    45.254055,
    -75.736961,
    2,
    'Barrhaven',
    48,
    64
  ),
  (
    'guinness-park',
    'Guinness Park',
    '120 Ramsgrange Street',
    45.239832,
    -75.730943,
    2,
    'Barrhaven',
    54,
    82
  ),
  (
    'summerhill-park',
    'Summerhill Park',
    '560 Summerhill Street',
    45.268111,
    -75.695519,
    2,
    'Barrhaven / Riverside South',
    82,
    46
  ),
  (
    'four-seasons-park',
    'Four Seasons Park',
    '4386 Spratt Road',
    45.275834,
    -75.690120,
    2,
    'Barrhaven / Riverside South',
    86,
    36
  )
on conflict (slug) do update
set
  name = excluded.name,
  address = excluded.address,
  latitude = excluded.latitude,
  longitude = excluded.longitude,
  total_courts = excluded.total_courts,
  neighbourhood = excluded.neighbourhood,
  map_x_percent = excluded.map_x_percent,
  map_y_percent = excluded.map_y_percent;

insert into public.reports (
  court_id,
  available_courts,
  waiting_groups
)
values
  (
    (select id from public.courts where slug = 'mancini-park'),
    2,
    0
  ),
  (
    (select id from public.courts where slug = 'half-moon-bay-park'),
    2,
    0
  ),
  (
    (select id from public.courts where slug = 'guinness-park'),
    2,
    0
  ),
  (
    (select id from public.courts where slug = 'summerhill-park'),
    2,
    0
  ),
  (
    (select id from public.courts where slug = 'four-seasons-park'),
    2,
    0
  );
