export const newUser = (form) => {

    form.addEventListener('submit', (e) => {
        const name = form.querySelector('[name="name"]').value;
        const location = form.querySelector('[name="location"]').value;
        e.preventDefault();
        const formData = { name, location };
        console.log(formData);
        postData('http://localhost:3000/users', formData);
    })

    const postData = async (url, data) => {

        try {
            let res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });

            return await res.json();
        }

        catch (error) {

        }

    }

}