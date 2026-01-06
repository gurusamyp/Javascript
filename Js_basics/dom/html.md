## common global attributes 
 `id`, `class`, `style`, 
 and events (e.g., `onclick`), 

## Basic Structure
- `<!DOCTYPE html>` - No attributes; declares HTML5.
- `<html>` - `lang` (language), `dir` (text direction: ltr/rtl), `xml:lang`.
- `<head>` - No specific attributes (global only).
- `<title>` - No specific attributes.
- `<body>` - `onafterprint`, `onbeforeprint`, `onbeforeunload`, `onhashchange`, `onload`, `onpagehide`, `onpageshow`, `onstorage`, `onunload`.[1]

## Text Formatting
- `<h1>` to `<h6>` - Global attributes; `hidden`.
- `<p>` - Global attributes; `hidden`.
- `<strong>` - Global attributes.
- `<em>` - Global attributes.
- `<u>` - Global attributes.
- `<s>` - Global attributes.[1]

## Links and Images
- `<a>` - `href`, `hreflang`, `target` (_blank, _self), `download`, `ping`, `rel` (nofollow, noopener), `referrerpolicy`, `type`.
- `<img>` - `alt`, `src`, `srcset`, `sizes`, `crossorigin`, `decoding` (sync/async), `fetchpriority`, `height`, `ismap`, `loading` (lazy/eager), `referrerpolicy`, `usemap`, `width`.
- `<figure>` - Global attributes.
- `<figcaption>` - Global attributes.[2]

## Lists
- `<ul>` - Global attributes; `compact` (deprecated), `hidden`.
- `<ol>` - Global attributes; `reversed`, `start`, `type` (1,a,A,i,I).
- `<li>` - Global attributes; `value`.[1]

## Tables
- `<table>` - Global attributes; `sortable` (experimental).
- `<tr>` - Global attributes.
- `<th>` - `colspan`, `headers`, `rowspan`, `scope` (col,row), `abbr`.
- `<td>` - `colspan`, `headers`, `rowspan`.
- `<thead>` - Global attributes.
- `<tbody>` - Global attributes.
- `<tfoot>` - Global attributes.[1]

## Forms
- `<form>` - `action`, `autocomplete` (on/off), `enctype` (application/x-www-form-urlencoded, multipart/form-data), `method` (get/post), `name`, `novalidate`, `target`.
- `<input>` - `accept`, `align` (deprecated), `alt`, `autocomplete`, `checked`, `dirname`, `disabled`, `form`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`, `list`, `max`, `maxlength`, `min`, `multiple`, `name`, `pattern`, `placeholder`, `readonly`, `required`, `size`, `src`, `step`, `type` (button,checkbox,color,date,datetime-local,email,file,hidden,image,month,number,password,radio,range,reset,search,submit,tel,text,time,url,week), `value`, `width`.
- `<label>` - `for`, `form`.
- `<select>` - `autocomplete`, `disabled`, `form`, `multiple`, `name`, `required`, `size`.
- `<option>` - `disabled`, `label`, `selected`, `value`.
- `<textarea>` - `autocomplete`, `cols`, `disabled`, `form`, `maxlength`, `minlength`, `name`, `placeholder`, `readonly`, `required`, `rows`, `wrap` (hard/soft).
- `<button>` - `autofocus`, `disabled`, `form`, `formaction`, `formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `name`, `type` (button,submit,reset), `value`.[1]

## Semantic Tags
- `<header>` - Global attributes.
- `<nav>` - Global attributes.
- `<main>` - Global attributes; `hidden`.
- `<article>` - Global attributes.
- `<section>` - Global attributes.
- `<footer>` - Global attributes.[1]

## CSS Styling
- `class=""` - Global attribute for CSS classes.
- `id=""` - Global attribute for unique identifiers.
- `<style>` - `media`, `nonce`, `type` (text/css).
- `<link>` - `href`, `crossorigin`, `media`, `hreflang`, `referrerpolicy`, `sizes`, `type` (text/css), `rel` (stylesheet).[2]

## Meta Tags
- `<meta charset="UTF-8">` - `charset`.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` - `name`, `content`, `http-equiv`.[1]

## Miscellaneous
- `<!-- Comment -->` - No attributes; for notes.
- `<!DOCTYPE html>` - No attributes (repeated for emphasis).
- `<div>` - Global attributes.[1]

