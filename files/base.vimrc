" An example for a vimrc file.
"
" Maintainer:	Bram Moolenaar <Bram@vim.org>
" Last change:	2008 Dec 17
"
" To use it, copy it to
"     for Unix and OS/2:  ~/.vimrc
"	      for Amiga:  s:.vimrc
"  for MS-DOS and Win32:  $VIM\_vimrc
"	    for OpenVMS:  sys$login:.vimrc

" When started as "evim", evim.vim will already have done these settings.
if v:progname =~? "evim"
  finish
endif

" Use Vim settings, rather than Vi settings (much better!).
" This must be first, because it changes other options as a side effect.
set nocompatible

" allow backspacing over everything in insert mode
set backspace=indent,eol,start

set nobackup		" do not keep a backup file, use versions instead

set history=50		" keep 50 lines of command line history
set ruler		" show the cursor position all the time
set showcmd		" display incomplete commands
set incsearch		" do incremental searching

" For Win32 GUI: remove 't' flag from 'guioptions': no tearoff menu entries
" let &guioptions = substitute(&guioptions, "t", "", "g")

" Don't use Ex mode, use Q for formatting
map Q gq

" CTRL-U in insert mode deletes a lot.  Use CTRL-G u to first break undo,
" so that you can undo CTRL-U after inserting a line break.
inoremap <C-U> <C-G>u<C-U>

" In many terminal emulators the mouse works just fine, thus enable it.
if has('mouse')
  set mouse=a
endif

" Switch syntax highlighting on, when the terminal has colors
" Also switch on highlighting the last used search pattern.
if &t_Co > 2 || has("gui_running")
  syntax on
  set hlsearch
endif

" Only do this part when compiled with support for autocommands.
if has("autocmd")

  " Enable file type detection.
  " Use the default filetype settings, so that mail gets 'tw' set to 72,
  " 'cindent' is on in C files, etc.
  " Also load indent files, to automatically do language-dependent indenting.
  filetype plugin indent on

  " Put these in an autocmd group, so that we can delete them easily.
  augroup vimrcEx
  au!

  " For all text files set 'textwidth' to 78 characters.
  autocmd FileType text setlocal textwidth=78

  " When editing a file, always jump to the last known cursor position.
  " Don't do it when the position is invalid or when inside an event handler
  " (happens when dropping a file on gvim).
  " Also don't do it when the mark is in the first line, that is the default
  " position when opening a file.
  autocmd BufReadPost *
    \ if line("'\"") > 1 && line("'\"") <= line("$") |
    \   exe "normal! g`\"" |
    \ endif

  augroup END

else

  set autoindent		" always set autoindenting on

endif " has("autocmd")

" Convenient command to see the difference between the current buffer and the
" file it was loaded from, thus the changes you made.
" Only define it when not defined already.
if !exists(":DiffOrig")
  command DiffOrig vert new | set bt=nofile | r # | 0d_ | diffthis
		  \ | wincmd p | diffthis
endif

set number!     " 显示行号
set cursorline  " 高亮当前行
set laststatus=2    " 总是显示状态栏
 
if exists('+colorcolumn')
  set colorcolumn=80    " 设置参考线
endif
 
" 设置空格替换 tab 缩进，4个字节的缩进
set smarttab
set tabstop=4
set shiftwidth=4
set expandtab
 
" 设置 {{{ }}} 代码折叠
"set foldmethod=marker
 
" 启用语法折叠，默认折叠层次为30层，即基本上不默认折叠，使用 zc zo 操作
set foldmethod=syntax
set foldenable
set foldlevel=30
 
" tab-page
map <Leader>tn :tabnext<CR>
map <Leader>tp :tabprev<CR>
map <Leader>tc :tabclose<CR>
map <Leader>te :tabedit
 
" buffer
map <Leader>bn :bnext<CR>
map <Leader>bp :bprevious<CR>
map <Leader>bd :bd<CR>
 
set encoding=gbk  " 设置默认编码 Windows 下为gbk，*nix下一般为 utf-8
" 检测编辑文件的字符编码,顺序原因详情问 Google
set fileencodings=ucs-bom,utf-8,cp936,gb18030,eucjp,euckr,latin1
set termencoding=gbk    " 控制台字符编码 *nix下为utf-8
