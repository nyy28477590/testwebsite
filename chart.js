function getData(){
    let url = 'https://script.google.com/macros/s/AKfycbzhL7nTeiI-H12Fgnb_MV6OMZPTR2s01F3D61Qw7Rv2qQGuVxT2/exec'
    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
}