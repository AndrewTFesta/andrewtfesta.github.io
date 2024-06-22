andrewtfesta.github.io
=====

Personal website of Andrew Festa.

# Gemfile

```
source 'https://rubygems.org'
gem 'nokogiri'
gem 'rack', '~> 2.2.4'
gem 'rspec'
gem 'jekyll'
gem 'webrick', '~> 1.8'
gem 'tzinfo-data'
gem 'github-pages'
gem 'wdm'
```

# Commands

```
bundle update github-pages
bundle exec jekyll serve
```

# Theme documentation

This website uses the [Hacker](https://jekyll-themes.com/pages-themes/hacker) theme provided as an option through github pages.

## Learn More

[This resource](https://jekyll-themes.com/tocttou/hacker-blog) uses the same theme to build a minimalist responsive site. They also go over more specifics regarding building the theme from source to not rely on pointing directly to the remote theme.

[This source]((https://idratherbewriting.com/documentation-theme-jekyll/index.html)) is in reference to a different theme (Documentation Theme), but it is very thorough and is a decent resource for generally learning more about jekyll themes from a practical perspective.

[Liquid](https://shopify.github.io/liquid/basics/introduction/) is the templating engine Jekyll uses.

Or you can read more about Jekyll themes from [their documentation.](https://jekyllrb.com/docs/themes/)

It can also be useful to gain a bit of insight into the [site metadata](https://jekyll.github.io/github-metadata/site.github/) when publishing with GitHub.

- [Adding content and more](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll)
- [Making gh-pages dynamics](https://medium.com/pan-labs/dynamic-web-apps-on-github-pages-for-free-ffac2b776d45)

## Swapping themes

- [ASL](https://github.com/ExploreASL/Documentation)
- [Terminal](https://github.com/Squifi/jekyll-theme-terminal)
- [Minimalist](https://github.com/pages-themes/minimal)
- [Hacker](https://github.com/pages-themes/hacker?tab=readme-ov-file)

# Web App

## Node

- [NodeJS](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Deploying to GitHub Pages using gh-pages](https://blog.seancoughlin.me/deploying-to-github-pages-using-gh-pages)
- [Master the Art of Free Website Deployment: Firebase, GitHub Pages, and Vercel Unveiled!](https://vaibhavbajpayee21.medium.com/unleash-your-app-deploy-for-free-with-saas-magic-87b84f8cb6d8)

> Prerequisite: your system must have [Nodejs](https://nodejs.org/en) installed and a repository

```
npm install firebase
npm install -g firebase-tools
firebase init hosting
npm run build
firebase deploy
```

```
npm install gh-pages --save-dev
npm run build
```

## Gradio

> Pipelines are automatically supported in Gradio, a library that makes creating beautiful and user-friendly machine learning apps on the web a breeze. First, make sure you have Gradio installed:

`pip install gradio`

> Then, you can create a web demo around an image classification pipeline (or any other pipeline) in a single line of code by calling Gradio’s [Interface.from_pipeline](https://www.gradio.app/docs/interface#interface-from-pipeline) function to launch the pipeline. This creates an intuitive drag-and-drop interface in your browser:

```python
from transformers import pipeline
import gradio as gr

pipe = pipeline("image-classification", model="google/vit-base-patch16-224")

gr.Interface.from_pipeline(pipe).launch()
```

> By default, the web demo runs on a local server. If you’d like to share it with others, you can generate a temporary public link by setting `share=True` in `launch()`. You can also host your demo on [Hugging Face Spaces](https://huggingface.co/spaces) for a permanent link.

## Firebase

- [What is Firebase and how to use it](https://www.youtube.com/watch?v=p9pgI3Mg-So&t=1s)
- [Adding Firebase to your JS project](https://firebase.google.com/docs/web/setup?hl=en&authuser=1)
- [AngularFire web codelab](https://firebase.google.com/codelabs/firebase-web?authuser=1#0)
- [Deploying with REACT](https://create-react-app.dev/docs/deployment/)
- [Deploy to live & preview channels via GitHub pull requests](https://firebase.google.com/docs/hosting/github-integration#:~:text=You%20can%20integrate%20deploys%20to,PR%20on%20your%20GitHub%20repository.)

[//]: # (## Streamlit)
[//]: # (## AWS)
[//]: # (## Azure)

# Publishing Sources

- [Setting up the site](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#creating-your-site)
- [Configuring the source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
