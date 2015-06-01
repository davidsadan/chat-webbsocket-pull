$(document).ready(function(){
        $('#minhaDiv').hide();
		$('#clicado').click(function(){
			var div = $('.text');
			$('#minhaDiv').toggle(150);
			$('.text').css({color: '#7E7E7E;',position: 'relative', top: '-30px'}).animate({position: 'relative', top: '0px'}, 250).fadeIn(100);
		});

		$('#configs_content').hide();
		$('#configs').click(function(){
			var div = $('.text_configs');
			$('#configs_content').toggle(150);
			$('.text_configs').css({color: '#7E7E7E;',position: 'relative', top: '-30px'}).animate({position: 'relative', top: '0px'}, 250).fadeIn(100);
		});


		$('.panel_lateral').hide();
		$('#info').click(function(){

			$('.panel_lateral').toggle(200);

			var toggleWidth = $('.panel_msg').width() == 405 ? "100%" : "405px";
        	$('.panel_msg').animate({ width: toggleWidth }, 198);

        	var toggleBoxMsg = $('.box-mensagens').width() == 405 ? "100%" : "405";
        	$('.box-mensagens').animate({width: toggleBoxMsg}, 198);

			$('.menu').css({'border-radius': '0px 0px 0px 0px'}).animate({'border-radius': '5px 5px 0px 0px'});

			$('.perfil_img img').fadeIn(100).css({width: '0%', 'margin-left': '70px', 'margin-top': '70px'}).animate({width: '100%', 'margin-left': '0px', 'margin-top': '0px'}, 700 );


			$('.innerbox_lateral').css({'margin-top': '-30px', opacity: '0'}).animate({ 'margin-top': '0px', transition: '0.4s', opacity: '1'}, 600);
		});

		$('.avatar-status-mini').click(function(){
			$('.meu_status').toggle(300);
			$('.perfil_status_img img').fadeIn(100).css({width: '0%', 'margin-left': '70px', 'margin-top': '70px'}).animate({width: '100%', 'margin-left': '0px', 'margin-top': '0px'}, 700 );

			$('.innerbox_status_lateral').css({'margin-top': '-30px', opacity: '0'}).animate({ 'margin-top': '0px', transition: '0.4s', opacity: '1'}, 600);
		});

		$(document).on('keydown', function (e) {
		    if (e.keyCode === 27) {
		        $('.meu_status').fadeOut(200);
		    }
		});

		$(document).on('keydown', function(e) {

				if(e.keyCode === 27){
					$('.panel_lateral').fadeOut(100);
					$('.panel_msg').animate({width: '100%'},198);
					$('.box-mensagens').animate({width: '100%'},198);
				}
		});

		/* form de pesquisa de contatos  */
		/*$('.form_contatos').click(function(){
			$('.form_contatos input').focus();
		});*/

		$('.form_contatos input').focus(function(){
			$('.form_contatos').css({border: '1px solid rgb(247, 247, 247)', transition: '0.2s'});
		});

		$('.form_contatos input').blur(function(){
			$('.form_contatos').css({border: '1px solid rgb(219, 219, 219)', transition: '0.2s'}).fadeIn(200);
		});

		/* Botão de pesquisa e voltar */
		$('span.icon-search-back').hide();

		/* Quando dar o clique dentro do input, o botão se search é ativo */
		$('.form_contatos input').focus(function(){
			$('span.icon-search').fadeOut(100);
			$('span.icon-search-back').fadeIn(function(){
				$('span.icon-search-back').click(function(){
					$('.innerbox_contatos_search').show();
					$('.form_contatos input').blur();
					$('span.icon-search-back').fadeOut(100);
					$('span.icon-search').fadeIn(100);
					$('.reset_input').fadeOut(100);
					$('#search_contatos')[0].reset();
				});
			});
		});

		$('.form_contatos input').blur(function(){
			$('span.icon-search-back').fadeOut();
			$('span.icon-search').fadeIn();
			$('.reset_input').fadeOut();
		});

		/* Quando clica no botao de searh, o mesmo é trocado para o search back, e ao mesemo tempo faz o focus no input */
		$('span.icon-search').click(function(){
			$('.form_contatos input').focus();

			$('span.icon-search').fadeOut(100);
			$('span.icon-search-back').fadeIn(function(){
				$('span.icon-search-back').click(function(){
					$('.innerbox_contatos_search').show();
					$('.form_contatos input').blur();
					$('span.icon-search-back').fadeOut(100);
					$('span.icon-search').fadeIn(100);
					$('.reset_input').fadeOut(100);
					$('#search_contatos')[0].reset();
				});
			});
		});


		/* Quando clicar no X, apaga o que tava dentro do input e o botão de search back volta para o seacrh normal */
		$('.reset_input').hide();
		$('.form_contatos input').keydown(function() {
			$('.reset_input').show();
			$('.reset_input').click(function(){
				$('.innerbox_contatos_search').show();
				$('.reset_input').fadeOut(100);
				$('.form_contatos input').focus();
				$('#search_contatos')[0].reset();
			});
		});

		var resultado = $('.innerbox_contatos_search');
		$('.form_contatos input').keyup(function(){

			var key = $('.form_contatos input').val();

			key = key.replace(/^(.)|\s(.)/g, function($1){
			 return $1.toUpperCase( );
			});

			if(key){
				resultado.filter(':contains('+ key +')').show();
				resultado.filter(':not(:contains('+ key +'))').hide();
			}else{
				resultado.show();
			}
		});


		$('span.prev_conversa').mory({
		  size: 15,
		  expandText   : 'mostrar',
    	  collapseText : 'esconder'
		});

        $('input.send').click(function(){
            var val_email = $('input.email_input').val();
            if(val_email == ''){
                $('.erro span').text("Insira um email valido");
                return false;
            }
        });


        function add_janelas(id, nome){

            var nome_add= '<a href="#" id="info '+id+'">'+nome+'</a>';
            var id_msg_unitarias = '<div class="mensagens-unitarias" id="jan_'+id+'"><ul></ul></div> <div class="input-send-message"><input type="text" class="mensagem" id="'+id+'" autocomplete="off"/></div>';

            $('.nome-principal').html(nome_add);
            $('.box-mensagens').html(id_msg_unitarias);

        }


        function add_status(id){
            var status_principal = '<span class="opcoes-sobre '+id+'">editar</span><div class="load"></div>';
            $('.opcao-item').html(status_principal);
        }

        //funcção para adicionar a span do texto
        function add_status_amigo(id){
            var box_info_amigo = '<span class="texto inner" id="'+id+'">Atendimento segunda a sexta das 09:00 as 18:00</span>';
            $('.innerbox_lateral.status_amigo').html(box_info_amigo);
        }



         //clica no menu e mostra status do amigo
        $('.inner-menu').click(function(){
            var id = $('.mensagem').attr('id');
            var status = id;
            var id_user = 'status_amigo='+status;
            var campo = $('span.texto');
            add_status_amigo(id);

            $.ajax({
                type: 'POST',
                url : 'sys/status_amigo.php',
                data: id_user,
                success: function(html){
                    $('.innerbox_lateral.status_amigo').html(html);

                }
            });
        });

        $('.avatar-status-mini').click(function(){
            var id = $(this).attr('id');

            add_status(id);

            //CLIQUE DE EDITAR
            $('span.opcoes-sobre.'+id+'').click(function(){
                var inputEdit = '<input type="text" class="edit-opcoes-sobre '+id+'" id="'+id+'" name="status" placeholder="Seu Status" />';
                var btnEdit = '<span class="opcoes-sobre '+id+'" >editar</span>';

                $('span.texto.sobre').hide();
                $('.innerbox_status_lateral.sobre').prepend(inputEdit);
                $('span.opcoes-sobre.'+id+'').replaceWith('<span class="salvar-sobre '+id+'" id="'+id+'">salvar</span>');
                $('.opcao-item').append('<span class="cancelar-sobre">cancelar | </span>');

                //CLIQUE DE CANCELAR
                $('.cancelar-sobre').click(function(){
                    $('span.cancelar-sobre, span.salvar-sobre').hide();
                    $('input.edit-opcoes-sobre').hide();
                    $('span.texto.sobre').show();
                    $('.opcao-item').prepend(btnEdit);
                });

                $('span.salvar-sobre').click(function(){
                    var valorStatus = $('.edit-opcoes-sobre.'+id+'');
                    var valorInput = valorStatus.val();
                    var dataString = 'status='+valorInput;

                    if(valorInput == ''){
                        var focusInput = $('input.edit-opcoes-sobre')
                        focusInput.css({border: '1px solid red'});
                        focusInput.focus(function(){
                            focusInput.css({border: '1px solid #000'});
                        });

                    }else{

                            var btnEdit = '<span class="opcoes-sobre '+id+'" >editar</span>';
                            var texto = $('span.texto.sobre');

                            $('.load').show().fadeIn(400).html('<span class="sprite_load">salvando...</span>');
                            $.ajax({
                                type: 'POST',
                                url : 'sys/status.php',
                                data: dataString,
                                success: function(html){
                                    $('input.edit-opcoes-sobre.'+id+'').hide();
                                    texto.html(html);
                                    texto.show();
                                    $('.load').hide();
                                    $('span.salvar-sobre.'+id+'').replaceWith(btnEdit);
                                    $('.cancelar-sobre').hide();

                                }
                            });

                    }

                    return false;
                });
            });
        });

        var janelas = new Array();
        var users = new Array();

        $('.comecar').live('click', function(){
            var nome = $(this).attr('nome');
            var id = $(this).attr('id');
            var pega_id = id;
            var status = pega_id;
            var id_user = 'status_amigo='+status;
            $.ajax({
                type: 'POST',
                url : 'sys/status_amigo.php',
                data: id_user,
                success: function(html){
                    $('.status').html(html);

                }
            });
            janelas.push(id);

            add_janelas(id, nome);
            $('.panel_msg').show();
            $('.welcome-bg').hide();

            return false;
        });

        function abrir_janelas(x){
            $('.innerbox_contatos_search').each(function(){
                var link = $(this);
                var id = link.attr('id');

                if(id == x){
                    //link.click();
                    //$('.innerbox_contatos_search.comecar.'+id+'').addClass('topo');
                    $('.innerbox_contatos_search.comecar.'+id+'').css({background: 'rgb(241, 241, 241)'}).remove().prependTo('.amigos');

                    $('.innerbox_contatos_search').click(function ( e ) {
                        e.preventDefault();
                        $('.innerbox_contatos_search').removeClass("active").removeClass('topo'); //Remove any "active" class
                        $(this).addClass("active"); //Add "active" class to selected tab

                    });
                }
            });
        }

        var antes = -1;
        var depois = 0;
        var notificou = false;
        var recebeu = 0;
        var verificador = 0;
        function verificar(){
            users = [];
            beforeSend: antes = depois;
            $('.innerbox_contatos_search').each(function(){
                var link = $(this);
                var id_u = link.attr("id");
                users.push(id_u);
            });
            var u_online = $('span.online').attr('id');
             users.push(u_online);

            //var i = 0;
            $.post('sys/chat.php',{acao: 'verificar', ids: janelas, users: users}, function(x){
                if(x.nao_lidos != ''){
                    var arr = x.nao_lidos;
                    for(i in arr){
                        abrir_janelas(arr[i]);
                        notificou = i;

                        console.log(notificou);
                    }
                    recebeu = 2;
                }

                if(recebeu == 2){
                    if(notificou && notificou != verificador ){
                        verificador = notificou;
                    }
                    recebeu = 1;
                }

                if(x.count_nao_lidos){
                    var n_l = x.count_nao_lidos;
                    for(i in n_l){
                        if(n_l[i] >= 1){
                            document.title = '('+n_l[i]+ ') Time Chat';
                        }else{
                             document.title = 'Time Chat';
                        }
                    }
                }

                

                if(janelas.length > 0 ){
                    var mens = x.mensagens;
                    if(mens != ''){
                        for(i in mens){
                            //$(".mensagens-unitarias").animate({"scrollTop": $('.mensagens-unitarias')[0].scrollHeight}, "slow");
                            $('#jan_'+i+' ul').html(mens[i]);
                        }
                    }
                }

                var users_onlines = x.useronoff;
                for(i in users_onlines){
                    $('.innerbox_contatos_search span.type.'+i+'').removeClass('on off').addClass(users_onlines[i]);
                }

                depois += 1;
            }, 'jSON');

        }


        //atualizar();
        setInterval(function(){
            if(antes != depois){
                verificar();
            }
        }, 2000);


    //Ativa a div do usuário da conversa(coloca a cor verde)
    $('.innerbox_contatos_search').click(function ( e ) {
        e.preventDefault();
        $('.innerbox_contatos_search').removeClass("active").removeClass('topo'); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab

    });

    var idUser = $('.innerbox_contatos_search').attr('id');
    $(".content-direita,.innerbox_contatos_search").click(function(){
            var id = $('.mensagem').attr('id');
            $('.innerbox_contatos_search.comecar.'+id+'').css({background: '#fff'});
            $.post('sys/chat.php', {acao: 'mudar_status', user: id});
    });



    //funcao atualiza dados das mensagens
   var atualizar = function(){
        $.post("sys/chat.php", {
            acao: 'atualizar',
            array: janelas
        }, function(x){
            if(x != '' || x != ' '){
                for(i in x){
                    //$('.mensagens-unitarias').animate({scrollTop: $('.mensagens-unitarias').prop("scrollHeight")}, 1);
                    //$(".mensagens-unitarias").animate({"scrollTop": $('.mensagens-unitarias')[0].scrollHeight}, "slow");
                    $('#jan_'+i+' ul').html(x[i]);
                }
            }
        }, 'jSON');/*fecha metodo post*/
   };/*fecha funcao atualizar*/

    //NOTIFICAÇÃO
    function notifyMe() {
        if (!Notification) {
            alert('Notifications are supported in modern versions of Chrome, Firefox, Opera and Firefox.');
            return;
        }

        if (Notification.permission !== "granted")
            Notification.requestPermission();

        var notification = new Notification('Notification title', {
            icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
            body: "Hey there! You've been notified!",
        });


    }



        });