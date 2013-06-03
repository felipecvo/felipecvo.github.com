require 'digest/md5'

module Jekyll
  class GravatarTag < Liquid::Tag
    def render(context)
      context.site.title
    end
  end
end

Liquid::Template.register_tag('gravatar', Jekyll::GravatarTag)
