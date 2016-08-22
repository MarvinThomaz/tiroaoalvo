function voltar(acao, scope, rootscope, ionicplatform){
    var doCustomBack = acao;

    var oldSoftBack = rootscope.$ionicGoBack;

    rootscope.$ionicGoBack = function() {
        doCustomBack();
    };

    var deregisterSoftBack = function() {
        rootscope.$ionicGoBack = oldSoftBack;
    };

    var deregisterHardBack = ionicplatform.registerBackButtonAction(
        doCustomBack, 101
    );

    scope.$on('$destroy', function() {
        deregisterHardBack();
        deregisterSoftBack();
    });
}