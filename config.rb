# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions
# activate :sprockets
activate :directory_indexes
activate :autoprefixer

# Fonts
set :fonts_dir, 'fonts'

# Per-page layout changes:
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# Reload the browser automatically whenever files change
# configure :development do
#  activate :livereload
#  set :debug_assets, true
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Hash assets
  activate :asset_hash
end
