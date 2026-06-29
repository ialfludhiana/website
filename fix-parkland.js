const fs = require('fs');
const env = fs.readFileSync('.env.local', 'utf8');
env.split('\n').forEach(line => {
    const [k, ...v] = line.split('=');
    if (k && k.trim()) process.env[k.trim()] = v.join('=').trim().replace(/^"|"$/g, '');
});

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// All root-level images that belong to Parkland event
const parklandImages = [
    'IMG_2019_jovffz',
    'IMG_2012_erjb73',
    'IMG_2015_ahulu2',
    'IMG_2027_yco6ft',
    'IMG_2033_wfb5bc',
    'IMG_2031_jmnxsu',
    'IMG_2032_twyuh4',
    'IMG_2025_v3iktv',
    'IMG_2030_i5avco',
    'IMG_2016_kdyvkq',
    'IMG_2022_mlkk6c',
    'IMG_2021_tj2vi3',
    'IMG_2013_otajek',
    '76756971_2218010025165552_8050820478710841344_n_decs6v',
    '17798954_1699561637010396_1175641447839717484_n_-_Copy_rxkwxr',
    '17883796_1699561590343734_5397344653182618878_n_sl3bid',
    '17883515_1699561427010417_8466093924307658695_n_pio7uc',
    '17799472_1697115143921712_3455371286760459906_n_osksgz',
    '17862687_1699561497010410_6356581909936537578_n_d9bnk5',
    '17798954_1699561637010396_1175641447839717484_n_aijld3',
    '17903614_1699561827010377_641472455778505191_n_ddicua',
    'DSCF0249_znhd7t',
];

async function run() {
    for (const publicId of parklandImages) {
        try {
            const result = await cloudinary.uploader.rename(
                publicId,
                `ialf/events/Parkland/${publicId}`
            );
            console.log(`✅ Moved: ${publicId}`);
        } catch (e) {
            console.error(`❌ Failed: ${publicId} —`, e.message);
        }
    }
    console.log('\nDone!');
}

run();