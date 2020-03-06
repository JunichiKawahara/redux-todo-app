const initialState = {
    titles: []
};

function matomeReducer(state = initialState, action) {
    const matomeList = [
        'Provider を用いて、そのProps にStore を渡す',
        'コンポーネントのimport 元をcontainers に変更する',
        'store のsubscribe でコンポーネントの再描画を行っていた処理を削除する',
        '(store の生成も別ファイルに切り出すとさらにスッキリさせることもできる)',
        '(今回はcombineReducer も実装してみた)'
    ];
    switch (action.type) {
    case 'ADD':
        const titleSize = state.titles.length;
        if (titleSize >= matomeList.length) {
            return state;
        }
        const addition = matomeList[titleSize];
        return {
            ...state,
            titles: state.titles.concat(addition)
        }
    case 'RESET':
        return {
            ...state,
            titles: []
        }
    default:
        return state;
    }
}

export default matomeReducer;