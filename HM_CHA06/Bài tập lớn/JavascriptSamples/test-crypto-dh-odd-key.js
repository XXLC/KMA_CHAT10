x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20flagActive\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20v-if=\x22show(\x27flagActive\x27,\x20item)\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22active-edge\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20v-html=\x22flagActiveTitle\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20name\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20v-if=\x22!item.flagNameActive\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20v-html=\x22item.name\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22name\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20:title=\x22item.name\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@click.self=\x22rowClick(item,\x20$event)\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20v-else\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type=\x22text\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20v-model.trim=\x22item.name\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20:ref=\x22getItemKey(item)\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@focusout=\x22nameSave(item)\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20@keyup=\x22nameKeydown(item,\x20$event)\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20edit\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20v-show=\