/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// Vim
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'let unl(et)? return call au(tocmd)? augroup END set filetype con(tinue)? break? ' +
						'if else endif function endfunction for in endfor? plugin on enable ' +
						'try endt(ry)? cat(ch)? ec(ho)? fina(lly)? th(row)? map syntax command ' +
						'cm(ap)? cno(remap)? im(ap)? ino(remap)? lm(ap)? ln(oremap)? nm(ap)? nn(oremap)? no(remap)? om(ap)? ono(remap)? smap snor(emap)? vm(ap)? vn(oremap)? xm(ap)? xn(oremap)? ' +
						'cu(nmap)? iu(nmap)? lu(nmap)? nun(map)? ou(nmap)? sunm(ap)? unm(ap)? unm(ap)? vu(nmap)? xu(nmap)? ' +
                        'leader plug script sid unique silent hi(ghlight)? '
						;
        var functions =	'abs append argv atan2 bufexists bufname byte2line ceil cindent complete confirm cosh cursor did_filetype empty eventhandler exp extend filewritable findfile fmod foldclosed foldtext function getbufline getcharmod getcmdtype getfperm getftype getmatches getqflist gettabvar getwinposy globpath haslocaldir histdel hlexists iconv input inputrestore insert items len line localtime match matchdelete matchstr min mode nextnonblank pathshorten prevnonblank pumvisible readfile reltimestr remote_foreground remote_read remove repeat reverse search searchpair searchpos serverlist setcmdpos setloclist setpos setreg settabwinvar shellescape sin sort spellbadword split str2float strchars strftime string strpart strtrans submatch synconcealed synIDattr synstack tabpagebuflist tabpagewinnr taglist tanh tolower tr type undotree virtcol winbufnr winheight winnr winrestview winwidth ' +
                        'acos argc asin browse buflisted bufnr byteidx changenr clearmatches complete_add copy count deepcopy diff_filler escape executable expand feedkeys filter float2nr fnameescape foldclosedend foldtextresult garbagecollect getbufvar getcmdline getcwd getfsize getline getpid getreg gettabwinvar getwinvar has hasmapto histget hlID inputdialog inputsave isdirectory join libcall line2byte log maparg matchadd matchend max mkdir mzeval nr2char pow printf range reltime remote_expr remote_peek remote_send rename resolve round searchdecl searchpairpos server2client setbufvar setline setmatches setqflist settabvar setwinvar simplify sinh soundfold spellsuggest sqrt str2nr strdisplaywidth stridx strlen strridx strwidth substitute synID synIDtrans system tabpagenr tagfiles tan tempname toupper trunc undofile values visualmode wincol winline winrestcmd winsaveview writefile ' +
                        'add argidx atan browsedir bufloaded bufwinnr call char2nr col complete_check cos cscope_connection delete diff_hlID eval exists expr8 filereadable finddir floor fnamemodify foldlevel foreground get getchar getcmdpos getfontname getftime getloclist getpos getregtype getwinposx glob has_key histadd histnr hostname index inputlist inputsecret islocked keys libcallnr lispindent log10 mapcheck matcharg matchlist '
                        ;

		var r = SyntaxHighlighter.regexLib;
		
		this.regexList = [
			{ regex: r.singleQuotedString,			                css: 'string' },			// double quoted strings
			{ regex: r.doubleQuotedString,					        css: 'string' },			// single quoted strings
			{ regex: /".*$/gm,							            css: 'comments' },			// one line comments
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' },			// keywords
			{ regex: new RegExp(this.getKeywords(functions), 'gm'),		css: 'functions bold' },// function
			];
	
		this.forHtmlScript(r.scriptScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['vim', 'vi'];

	SyntaxHighlighter.brushes.Vim = Brush;

	// Vim
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
