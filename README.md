# react-intl-auto-translate
Automatically translate language file using google or yandex translator

## How to install

```
npm install -g react-intl-auto-translator
```

## Run

```
intl-translate /path/to/site/public/locales/en.json es
```

## Usage

You could use this tool to automate the deployment process of your React app that has used `react-intl` for i18n.

## Command line arguments

```
intl-translate {/path/to/source/locale/en.json} {target_local_code} {api_key}
```

{source_local} = File location of the source locale file

[{target_local_code}](https://cloud.google.com/translate/docs/languages) = Locale code that you want to convert the source file

{api_key} = Google cloud api key for Translate cloud service


## Locale codes

```
Language	ISO-639-1 Code
Afrikaans	af
Albanian	sq
Amharic	am
Arabic	ar
Armenian	hy
Azerbaijani	az
Basque	eu
Belarusian	be
Bengali	bn
Bosnian	bs
Bulgarian	bg
Catalan	ca
Cebuano	ceb (ISO-639-2)
Chinese (Simplified)	zh-CN or zh (BCP-47)
Chinese (Traditional)	zh-TW (BCP-47)
Corsican	co
Croatian	hr
Czech	cs
Danish	da
Dutch	nl
English	en
Esperanto	eo
Estonian	et
Finnish	fi
French	fr
Frisian	fy
Galician	gl
Georgian	ka
German	de
Greek	el
Gujarati	gu
Haitian Creole	ht
Hausa	ha
Hawaiian	haw (ISO-639-2)
Hebrew	he or iw
Hindi	hi
Hmong	hmn (ISO-639-2)
Hungarian	hu
Icelandic	is
Igbo	ig
Indonesian	id
Irish	ga
Italian	it
Japanese	ja
Javanese	jw
Kannada	kn
Kazakh	kk
Khmer	km
Korean	ko
Kurdish	ku
Kyrgyz	ky
Lao	lo
Latin	la
Latvian	lv
Lithuanian	lt
Luxembourgish	lb
Macedonian	mk
Malagasy	mg
Malay	ms
Malayalam	ml
Maltese	mt
Maori	mi
Marathi	mr
Mongolian	mn
Myanmar (Burmese)	my
Nepali	ne
Norwegian	no
Nyanja (Chichewa)	ny
Pashto	ps
Persian	fa
Polish	pl
Portuguese (Portugal, Brazil)	pt
Punjabi	pa
Romanian	ro
Russian	ru
Samoan	sm
Scots Gaelic	gd
Serbian	sr
Sesotho	st
Shona	sn
Sindhi	sd
Sinhala (Sinhalese)	si
Slovak	sk
Slovenian	sl
Somali	so
Spanish	es
Sundanese	su
Swahili	sw
Swedish	sv
Tagalog (Filipino)	tl
Tajik	tg
Tamil	ta
Telugu	te
Thai	th
Turkish	tr
Ukrainian	uk
Urdu	ur
Uzbek	uz
Vietnamese	vi
Welsh	cy
Xhosa	xh
Yiddish	yi
Yoruba	yo
Zulu	zu
```
