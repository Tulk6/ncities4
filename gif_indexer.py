import yaml
with open('gif_index.yaml') as f:
    gif_index = yaml.safe_load(f)

js_index = {'all':[]}
for gif, themes in gif_index.items():
    js_index['all'].append(gif)
    for theme in themes:
        try:
            js_index[theme].append(gif)
        except KeyError:
            js_index[theme] = [gif]

out_str = 'var emoticons_index = {\n'

for theme, gifs in js_index.items():
    out_str += f"    '{theme}': new Set({gifs}),\n"

out_str = out_str[:-2]+'\n}'

print(out_str)

html_str = ''
for theme in sorted(js_index.keys()):
    if theme == "all": continue
    #html_str += f'<input type="checkbox" id="tag_{theme}">\n'
    #html_str += f'<label> for="tag_{theme}">{theme}</label>\n'
    html_str += f'<label><input type="checkbox" name="{theme} id="tag_{theme}">{theme}</label>\n'

    #<label><input type="checkbox" name="option5"> Option 5</label>

print(html_str)