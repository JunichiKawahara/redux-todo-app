import React from 'react';

function MatomeApp(param) {
    const { titles, addMatome, resetMatome } = {...param}
    return (
        <>
            <h2>まとめ</h2>
            <button onClick={() => addMatome()}>Click Me!!</button>
            <button onClick={() => resetMatome() }>Reset!!</button>
            <ul>
                {
                    titles.map(function(item, i) {
                        return (
                            <li key={i}>{item}</li>
                        );
                    })
                }
            </ul>
        </>
    )
}

export default MatomeApp;