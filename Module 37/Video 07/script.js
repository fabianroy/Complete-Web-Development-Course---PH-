const addToLocalStorage = () => {
    const id = document.getElementById('storageID').value;
    const value = document.getElementById('storageValue').value;

    // add to local storage
    localStorage.setItem(id, value);
}

localStorage.setItem('Numbers', JSON.stringify([1,2,3,4,5]));
