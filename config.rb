page "_headers", layout: false

# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

# https://middlemanapp.com/advanced/pretty-urls/
activate :directory_indexes

# https://github.com/middleman/middleman-autoprefixer
activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Fonts
set :fonts_dir, 'fonts'

# Per-page layout changes:
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Hash assets
  activate :asset_hash
end
