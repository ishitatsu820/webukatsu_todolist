// 【はじめに】
// todoはjsでのDOM操作の全てが詰まっている
// イベントセット、要素の取得、追加、削除、変更、表示、非表示、アニメーション
// デザイン上のクラス名とjs操作用のクラス名は分けること！

// 【やること】
// 1. TODOを追加を押下した際にタスクを追加する
// 2. TODOタスクのアイコンを押下した際にタスクをDONEにする
// 3. DONEタスクのアイコンを押下した際にタスクをTODOタスクに戻す
// 4. ゴミ箱アイコンを押下した際にタスクを削除する
// 5. TODOタスクのテキストをクリックした際に入力できるようにし、shift+Enterで修正を確定する
// 6. 検索エリアに値を入力した際にタスクの中から値にマッチするタスクのみ表示させる


//【1. TODOを追加を押下した際にタスクを追加する】
// 1. 「TODOを追加」ボタンを押下した際にイベントを発火
// 2. inputの値を取得（取得したらクリアする）
// 3. inputの値をlistのitemに追加する（DOM生成）
$('.js-add-todo').on('click', function(e){
  e.preventDefault(); //イベントをキャンセル

  var text = $('.js-get-val').val();
  $('.js-get-val').val('');

  if(!text){
    $('.js-toggle-error').show();
    return;
  }

  $('.js-toggle-error').hide();

  var listItem = '<li class="list__item js-todo_list_item" data-text="' + text + '">' +
  '<i class="far fa-square icon-check js-click-done" aria-hidden="true"></i>' + 
  '<span class="js-todo_list-text">' + text + '</span>' +
  '<input type="text" class="editText js-todo_list-editForm" value="' + text + '">' +
  '<i class="far fa-trash-alt icon-trash js-click-trash" aria-hidden="true"></i>' + 
  '</li>';

  $('.js-todo_list').prepend(listItem);

});
