 var csrftoken = Cookies.get('csrftoken');
 function csrfSafeMethod(method) {
 // Для этих методов токен не будет подставляться в заголовок.
 return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
 }
 $.ajaxSetup({
 beforeSend: function(xhr, settings) {
 if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
 xhr.setRequestHeader("X-CSRFToken", csrftoken);
 }
 }
 });
 $(document).ready(function(){
         $('a.follow').click(function(e){
 e.preventDefault();
 $.post(`{% url "users_follow" %}`,
 {
 id: $(this).data('id'),
 action: $(this).data('action')
 },
 function(data){
 if (data['status'] == 'ok') {
 var previous_action = $('a.follow').data('action');
 // Изменяем действие на противоположное.
 $('a.follow').data('action', previous_action == 'follow' ? 'unfollow' : 'follow');
 // Изменяем текст ссылки.
 $('a.follow').text(previous_action == 'follow' ? 'Unfollow' : 'Follow');
 // Обновляем количество подписчиков.
 var previous_followers = parseInt( $('span.count .total').text());
 $('span.count .total').text( previous_action == 'follow' ? previous_followers + 1 : previous_followers - 1 );
 }
 });
 });
 });