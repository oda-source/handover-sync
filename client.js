/* 受渡連動 Power-Up - ステップ1: ボタンと認証 */
var ICON = new URL('./icon.svg', location.href).href;

TrelloPowerUp.initialize({
  // ボード上部のボタン。連動がONのボードでは「受渡連動 ON」と表示する
  'board-buttons': function (t) {
    return t.get('board', 'shared', 'handoverSync').then(function (state) {
      var on = !!(state && state.enabled);
      return [{
        icon: { dark: ICON, light: ICON },
        text: on ? '受渡連動 ON' : '受渡連動',
        condition: 'edit',
        callback: function (t) {
          return t.popup({
            title: '受渡連動',
            url: './settings.html',
            height: 230
          });
        }
      }];
    });
  }
}, {
  appKey: HANDOVER_CONFIG.appKey,
  appName: HANDOVER_CONFIG.appName
});
