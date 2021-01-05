sass_dir         = "/"
http_path        = "../"
css_dir          = "../"
images_dir       = "../img"
javascripts_dir  = "../js"
relative_assets  = true
environment      = :production
output_style     = (environment == :production) ? :compact : :expanded
sass_options     = {:debug_info=>false}
line_comments    = false
preferred_syntax = :scss
