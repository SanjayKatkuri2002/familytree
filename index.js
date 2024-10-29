// var options = getOptions();

// let loginDetails = localStorage.getItem("loginDetails");

// if (loginDetails) {
//     loginDetails = JSON.parse(loginDetails);
// } else {
//     window.location.href = "index.html";
// }



FamilyTree.templates.sriniz = Object.assign({}, FamilyTree.templates.base);

FamilyTree.templates.sriniz.size = [225, 100];
FamilyTree.templates.sriniz.node =
    '<rect x="0" y="0" height="90" width="225" stroke-width="1" rx="15" ry="15"></rect>';


FamilyTree.templates.hugo.defs = `
<g transform="matrix(0.05,0,0,0.05,-13 ,-12)" id="heart">
    <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:#fff;stroke:red;stroke-miterlimit:10;stroke-width:24px" fill="red"></path><path d="M256,360a16,16,0,0,1-9-2.78c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5.31-31.06,25.22-56.33,55.53-56.33,20.4,0,35,10.63,44.1,20.41a6,6,0,0,0,8.72,0c9.11-9.78,23.7-20.41,44.1-20.41,30.31,0,55.22,25.27,55.53,56.33.28,27.1-9.31,52.13-29.3,76.5-9.38,11.44-26.4,29.73-65.7,56.41A16,16,0,0,1,256,360Z" fill="red"></path>
  </g>
  <g id="hugo_male_up">
    <circle cx="15" cy="15" r="10" fill="#fff" stroke="#fff" stroke-width="1"></circle>
    ${FamilyTree.icon.ft(15, 15, '#039BE5', 7.5, 7.5)}
  </g>

  <g id="hugo_female_up">
    <circle cx="15" cy="15" r="10" fill="#fff" stroke="#fff" stroke-width="1"></circle>
    ${FamilyTree.icon.ft(15, 15, '#FF46A3', 7.5, 7.5)}
  </g>`;


// Male
FamilyTree.templates.sriniz_male = Object.assign({},
    FamilyTree.templates.hugo
);
FamilyTree.templates.sriniz_male.node =
    '<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill="#039BE5" stroke="#aeaeae" rx="15" ry="15"></rect>';

FamilyTree.templates.sriniz_male.field_0 =
    '<text style="font-size: 16px; font-weight: bold;" fill="#ffffff" x="100" y="30">{val}</text>';
FamilyTree.templates.sriniz_male.field_1 =
    '<text style="font-size: 12px; font-weight: bold;" fill="#ffffff" x="100" y="50">{val}</text>';

// Female
FamilyTree.templates.sriniz_female = Object.assign({},
    FamilyTree.templates.sriniz
);
FamilyTree.templates.sriniz_female.node =
    '<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill="#FF46A3" stroke="#aeaeae" rx="15" ry="15"></rect>';

FamilyTree.templates.sriniz_female.field_0 =
    '<text style="font-size: 16px; font-weight: bold;" fill="#ffffff" x="100" y="30">{val}</text>';
FamilyTree.templates.sriniz_female.field_1 =
    '<text style="font-size: 12px; font-weight: bold;" fill="#ffffff" x="100" y="50">{val}</text>';

const expandIconMale =
    '<circle cx="97" cy="-16" r="10" fill="#039BE5" stroke="#fff" stroke-width="1"><title>Expand</title></circle>' +
    '<line x1="90" y1="-16" x2="104" y2="-16" stroke-width="1" stroke="#fff"></line>' +
    '<line x1="97" y1="-23" x2="97" y2="-9" stroke-width="1" stroke="#fff"></line>';

const expandIconFemale =
    '<circle cx="97" cy="-16" r="10" fill="#FF46A3" stroke="#fff" stroke-width="1"></circle>' +
    '<line x1="90" y1="-16" x2="104" y2="-16" stroke-width="1" stroke="#fff"></line>' +
    '<line x1="97" y1="-23" x2="97" y2="-9" stroke-width="1" stroke="#fff"></line>';

FamilyTree.templates.sriniz_male.plus = expandIconMale;
FamilyTree.templates.sriniz_female.plus = expandIconFemale;

// Image
const imgTemplate =
    '<clipPath id="ulaImg">' +
    '<rect  height="75" width="75" x="7" y="7" stroke-width="1" fill="#FF46A3" stroke="#aeaeae" rx="15" ry="15"></rect>' +
    '</clipPath>' +
    '<image x="7" y="7" preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" width="75" height="75">' +
    '</image>';

FamilyTree.templates.sriniz_male.img_0 = imgTemplate;
FamilyTree.templates.sriniz_female.img_0 = imgTemplate;

FamilyTree.templates.sriniz_male.up =
    '<use x="195" y="0" xlink:href="#sriniz_male_up"></use>';
FamilyTree.templates.sriniz_female.up =
    '<use x="195" y="0" xlink:href="#sriniz_female_up"></use>';

// Pointer
FamilyTree.templates.sriniz.pointer =
    '<g data-pointer="pointer" transform="matrix(0,0,0,0,80,80)">><g transform="matrix(0.3,0,0,0.3,-17,-17)">' +
    '<polygon fill="#039BE5" points="53.004,173.004 53.004,66.996 0,120" />' +
    '<polygon fill="#039BE5" points="186.996,66.996 186.996,173.004 240,120" />' +
    '<polygon fill="#FF46A3" points="66.996,53.004 173.004,53.004 120,0" />' +
    '<polygon fill="#FF46A3" points="120,240 173.004,186.996 66.996,186.996" />' +
    '<circle fill="red" cx="120" cy="120" r="30" />' +
    '</g></g>';


var family = new FamilyTree(document.getElementById('tree'), {
    mouseScrool: FamilyTree.none,
    scaleInitial: options.scaleInitial,
    mode: 'dark',
    template: 'hugo',
    roots: [3],
    nodeMenu: {
        edit: { text: 'Edit' },
        details: { text: 'Details' },
    },
    nodeTreeMenu: true,
    nodeBinding: {
        field_0: 'name',
        field_1: 'born',
        img_0: 'photo'
    },
    editForm: {
        titleBinding: "name",
        photoBinding: "photo",
        addMoreBtn: 'Add element',
        addMore: 'Add more elements',
        addMoreFieldName: 'Element name',
        generateElementsFromFields: true,
        elements: [
            { type: 'textbox', label: 'Full Name', binding: 'name' },
            { type: 'textbox', label: 'Email Address', binding: 'email' },
            [
                { type: 'textbox', label: 'Phone', binding: 'phone' },
                { type: 'date', label: 'Date Of Birth', binding: 'born' }
            ],
            [
                { type: 'select', options: [{ value: 'bg', text: 'bangalore' }, { value: 'ru', text: 'Rajasthan' }, { value: 'gr', text: 'Gujarat' }], label: 'Country', binding: 'country' },
                { type: 'textbox', label: 'City', binding: 'city' },
            ],
            { type: 'textbox', label: 'Photo Url', binding: 'photo', btn: 'Upload' },
            {type: 'textbox', label: 'location url', binding: 'location', btn:'upload'},
        ]
    },
});

family.on('field', function (sender, args) {
    if (args.name == 'born') {
        var date = new Date(args.value);
        args.value = date.toLocaleDateString();
    }
});


family.load(
    [
        { id: 1, pids: [3], gender: 'male', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXgfdicDup3jwkacJ5yzfSdF82clvZS1U-A&s', name: 'Bachan ', born: '1954-09-29' },
        { id: 2, pids: [3], gender: 'male', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXgfdicDup3jwkacJ5yzfSdF82clvZS1U-A&s', name: 'Father ', born: '1952-10-10' },
        { id: 3, pids: [1, 2], gender: 'female', photo: 'https://www.informalnewz.com/wp-content/uploads/2023/03/Jaya-Bachchan-706x706.jpg', name: 'Mother ', born: '1943-01-13', email: 'laura.shepherd@gmail.com', phone: '+44 845 5752 547', city: '', country: 'ru' },
        { id: 4, pids: [5], photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhoUtkYHfahb7QNU1mWDf3OLBP197xlu1cU4YNGTOok8jJi39_', name: 'Uncle' },
        { id: 5, pids: [4], gender: 'female', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHaaKJ8mZJzoDMSRXRDjr4e9mJHijgJ3YtnQ&s', name: 'Aunty' },
        { id: 6, mid: 2, fid: 3, pids: [7], gender: 'female', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXH-_OD9Xpqo2moQlIS3_2dpYZ3RO2ekCECg&s', name: 'Me', born: '1975-11-12' },
        { id: 7, pids: [6], mid: 5, fid: 4, gender: 'male', photo: 'https://starsunfolded.com/wp-content/uploads/2023/09/Nikhil-Nanda-.jpg', name: 'Husband', born: '1986-10-01' },
        { id: 8, mid: 7, fid: 6, gender: 'female', photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQFj0XmZyb6AKtv2Xllz95-oz4CU8Ylxw-3QgQ8N4nJctLUVIiN', name: 'my Daughter', born: '2021-02-01' }
    ]
);

family.onUpdateNode((args) => {
    //post the data from args to your server
    console.log(args)
});


function getOptions(){
    const searchParams = new URLSearchParams(window.location.search);
    var fit = searchParams.get('fit');
    var enableSearch = true;
    var scaleInitial = 1;
    if (fit == 'yes'){
        enableSearch = false;
        scaleInitial = FamilyTree.match.boundary;
    }
    return {enableSearch, scaleInitial};
}