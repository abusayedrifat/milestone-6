const loadPhone =  async (searchText, isShowAll) =>{
    const res = await fetch(` https://openapi.programming-hero.com/api/phones?search=${searchText} `);
    const data = await res.json();
    const phones = data.data;
    console.log(phones);

    displayPhones(phones, isShowAll)
}


const displayPhones = (phones, isShowAll) =>{
    
   const phoneContainer = document.getElementById('phone-container');
   //clear phone container cards before adding new cards
   phoneContainer.textContent ='';

   console.log(phones.length);
//show all button if there ar more than 12 phones
const showAllBtn = document.getElementById('show-all-btn');

if (phones.length > 7 && !isShowAll) {
        showAllBtn.classList.remove('hidden');

}
 else {
    showAllBtn.classList.add('hidden');
}

   //display only first 12 phones if not show all
  if (!isShowAll) {
    phones = phones.slice(0,7)
  }
   


    phones.forEach(phone => {
       
        const phoneCard = document.createElement('div');
        phoneCard.classList = ` card w-full bg-base-100 shadow-xl border border-[#9890906f] `;
        phoneCard.innerHTML = `
        <figure class="p-10 m-6 rounded-xl bg-slate-200">
            <img src="${phone.image}" alt="Shoes" class="rounded-2xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title"> ${phone.phone_name} </h2>
            <p>There are many variations of passages of available, but the majority have suffered</p>
            <div class="card-actions">
            <button onclick = "handleShowDetail(' ${phone.slug} ')" class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `;
phoneContainer.appendChild(phoneCard)
        
    });

    //remove  toggleLoadingSpinner() after loading data

    toggleLoadingSpinner(false);
}

//handle search button

const handleSearch = (isShowAll) =>{
    toggleLoadingSpinner(true)
    const searchField = document.getElementById('search-Filed');
    const searchText = searchField.value ;
    console.log(searchText);
   loadPhone(searchText, isShowAll);
  
}


const handleSearch2 = () =>{
    toggleLoadingSpinner(true)
    const searchField2 = document.getElementById('search-Filed2');
    const searchText = searchField2.value ;
    loadPhone(searchText);

}

const toggleLoadingSpinner = (isLoading) =>{
      const load = document.getElementById('loader');
      if (isLoading) {
        load.classList.remove('hidden');
        
      }
      else{
        load.classList.add('hidden');
      }
}

//handle show all

const handleShowAll = () =>{
    handleSearch(true)
}

//handle show detail 

const handleShowDetail = async (id) =>{
console.log(id);

//load single phone data
const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
const data = await res.json();
const phone = data.data;

showPhoneDetails(phone)
}


const showPhoneDetails = (phone) =>{
console.log(phone);
    //show the modal
    phone_detail_modal.showModal()
    
}





// loadPhone()




