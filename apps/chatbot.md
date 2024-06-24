---
title: Chatbot
layout: default
type: app
app_src: app_space
app_space: kiliasal/website_chat
#app_url: https://kiliasal-website-chat.hf.space
---

Chatbot
=====

- src: as we've seen, the src attributes links to the URL of the hosted Gradio demo that you would like to embed
- space: an optional shorthand if your Gradio demo is hosted on Hugging Face Space. Accepts a username/space_name instead of a full URL. Example: gradio/Echocardiogram-Segmentation. If this attribute attribute is provided, then src does not need to be provided.
- control_page_title: a boolean designating whether the html title of the page should be set to the title of the Gradio app (by default "false")
- initial_height: the initial height of the web component while it is loading the Gradio app, (by default "300px"). Note that the final height is set based on the size of the Gradio app.
- container: whether to show the border frame and information about where the Space is hosted (by default "true")
- info: whether to show just the information about where the Space is hosted underneath the embedded app (by default "true")
- autoscroll: whether to autoscroll to the output when prediction has finished (by default "false")
- eager: whether to load the Gradio app as soon as the page loads (by default "false")
- theme_mode: whether to use the dark, light, or default system theme mode (by default "system")
- render: an event that is triggered once the embedded space has finished rendering.
