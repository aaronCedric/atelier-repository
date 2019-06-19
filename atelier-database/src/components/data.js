import plant from './img/plant.png'
import vegetable from './img/vegetable.png'
import medicinal from './img/medicinal.png'
import water from './img/water.png'
import poison from './img/poison.png'
import spice from './img/spice.png'
import elixir from './img/elixir.png'
import ore from './img/ore.png'
import vapor from './img/vapor.png'
import clay from './img/clay.png'
import gunpowder from './img/gunpowder.png'
import fuel from './img/fuel.png'
import thread from './img/thread.png'
import animalProduct from './img/animalProduct.png'
import meat from './img/meat.png'
import gemstone from './img/gemstone.png'
import mystery from './img/mystery.png'
import lumber from './img/lumber.png'
import magicTool from './img/magicTool.png'
import seafood from './img/seafood.png'
import bug from './img/bug.png'
import mushroom from './img/mushroom.png'
import puniball from './img/puniball.png'
import dragon from './img/dragon.png'

const mats = [
    {
        id: 1,
        name: 'Plain Grass',
        main: 'Materials',
        category: [
            'Plants'
        ],
        categoryImg: [
            plant
        ],
        iLevel: 1,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/4/49/Plain_Grass.png/revision/latest?cb=20130918143729'
    },
    {
        id: 2,
        name: 'Uni',
        main: 'Materials',
        category: [
            'Plants', 
            'Vegetables'
        ],
        categoryImg: [
            plant,
            vegetable
        ],
        iLevel: 1,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/a/ad/A11_item_008.png/revision/latest?cb=20120626024457'
    },
    {
        id: 3,
        name: 'Nuse',
        main: 'Materials',
        category: [
            'Plants'
        ],
        categoryImg: [
            plant
        ],
        iLevel: 2,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/5/59/A12_Item_145.png/revision/latest?cb=20120906052037'
    },
    {
        id: 4,
        name: 'Clear Grass',
        main: 'Materials',
        category: [
            'Plants',
            'Medicinal'
        ],
        categoryImg: [
            plant,
            medicinal
        ],
        iLevel: 4,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 5,
        name: 'Med Tree Root',
        main: 'Materials',
        category: [
            'Plants',
            'Medicinal '
        ],
        categoryImg: [
            plant,
            medicinal
        ],
        iLevel: 11,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/b/be/A12_Item_151.png/revision/latest?cb=20120906052038'
    },
    {
        id: 6,
        name: 'Clean Water',
        main: 'Materials',
        category: [
            'Water'
        ],
        categoryImg: [
            water
        ],
        iLevel: 2,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 7,
        name: 'Foamy Water',
        main: 'Materials',
        category: [
            'Water',
            'Vapor'
        ],
        categoryImg: [
            water,
            vapor
        ],
        iLevel: 14,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/5/57/A11_item_032.png/revision/latest?cb=20120626024508'
    },
    {
        id: 8,
        name: 'Thunder Water',
        main: 'Materials',
        category: [
            'Water'
        ],
        categoryImg: [
            water
        ],
        iLevel: 15,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 9,
        name: 'Ointment Water',
        main: 'Materials',
        category: [
            'Water',
            'Medicinal',
            'Elixir'
        ],
        categoryImg: [
            water,
            medicinal,
            elixir
        ],
        iLevel: 15,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/f/f8/Ointment_Water.png/revision/latest?cb=20130918201547'
    },
    {
        id: 10,
        name: 'Fest',
        main: 'Materials',
        category: [
            'Ore'
        ],
        categoryImg: [
            ore
        ],
        iLevel: 1,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/8/88/A11_item_011.png/revision/latest?cb=20120626024500'
    },
    {
        id: 11,
        name: 'Snow Stone',
        main: 'Materials',
        category: [
            'Ore'
        ],
        categoryImg: [
            ore
        ],
        iLevel: 8,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/b/bb/A11_item_017.png/revision/latest?cb=20120626024501'
    },
    {
        id: 12,
        name: 'Quake Crystal',
        main: 'Materials',
        category: [
            'Ore'
        ],
        categoryImg: [
            ore
        ],
        iLevel: 9,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/8/84/A11_item_023.png/revision/latest?cb=20120626024505'
    },
    {
        id: 13,
        name: 'Stim Stone',
        main: 'Materials',
        category: [
            'Ore'
        ],
        categoryImg: [
            ore
        ],
        iLevel: 8,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/2/2c/A11_item_016.png/revision/latest?cb=20120626024501'
    },
    {
        id: 14,
        name: 'Metal Ore',
        main: 'Materials',
        category: [
            'Ore'
        ],
        categoryImg: [
            ore
        ],
        iLevel: 19,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/5/51/A12_Item_167.png/revision/latest?cb=20120906052044'
    },
    {
        id: 15,
        name: "Audra's Tail",
        main: 'Materials',
        category: [
            'Animal Products ',
            'Threads'
        ],
        categoryImg: [
            animalProduct,
            thread
        ],
        iLevel: 9,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/d/d0/A11_item_051.png/revision/latest?cb=20120626024516'
    },
    {
        id: 16,
        name: 'Rabbit Fur',
        main: 'Materials',
        category: [
            'Threads'
        ],
        categoryImg: [
            thread
        ],
        iLevel: 4,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 17,
        name: 'Winding Grass',
        main: 'Materials',
        category: [
            'Threads',
            'Plants'
        ],
        categoryImg: [
            thread,
            plant
        ],
        iLevel: 15,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/2/2e/A12_Item_153.png/revision/latest?cb=20120906052038'
    },
    {
        id: 18,
        name: 'Cotton Flower',
        main: 'Materials',
        category: [
            'Threads',
            'Plants'
        ],
        categoryImg: [
            thread,
            plant
        ],
        iLevel: 11,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/4/49/A11_item_021.png/revision/latest?cb=20120626024504'
    },
    {
        id: 19,
        name: 'Chain Web',
        main: 'Materials',
        category: [
            'Threads',
            'Gunpowder'
        ],
        categoryImg: [
            thread,
            gunpowder
        ],
        iLevel: 7,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/1/1b/A11_item_019.png/revision/latest?cb=20120626024502'
    },
    {
        id: 20,
        name: 'Phlogiston',
        main: 'Materials',
        category: [
            'Gunpowder',
            'Ore'
        ],
        categoryImg: [
            gunpowder,
            ore
        ],
        iLevel: 6,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/4/45/A11_item_012.png/revision/latest?cb=20120626024500'
    },
    {
        id: 21,
        name: 'Scrap Paper',
        main: 'Materials',
        category: [
            'Fuel',
        ],
        categoryImg: [
            fuel
        ],
        iLevel: 1,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 22,
        name: 'Fertile Soil',
        main: 'Materials',
        category: [
            'Fuel',
            'Clay'
        ],
        categoryImg: [
            fuel,
            clay
        ],
        iLevel: 1,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 23,
        name: 'Some Egg',
        main: 'Materials',
        category: [
            'Fuel',
            'Meat'
        ],
        categoryImg: [
            fuel,
            meat
        ],
        iLevel: 11,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/4/44/A11_item_022.png/revision/latest?cb=20120626024504'
    },
    {
        id: 24,
        name: 'Fuel Dirt',
        main: 'Materials',
        category: [
            'Fuel',
            'Clay'
        ],
        categoryImg: [
            fuel,
            clay
        ],
        iLevel: 13,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/9/9f/A11_item_014.png/revision/latest?cb=20120626024500'
    },
    {
        id: 25,
        name: 'Tar Fruit',
        main: 'Materials',
        category: [
            'Fuel',
            'Plants'
        ],
        categoryImg: [
            fuel,
            plant
        ],
        iLevel: 16,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/9/90/A12_Item_147.png/revision/latest?cb=20120906052037'
    },
    {
        id: 26,
        name: 'Bear Oil',
        main: 'Materials',
        category: [
            'Fuel'
        ],
        categoryImg: [
            fuel
        ],
        iLevel: 22,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 27,
        name: 'Sea Puddle',
        main: 'Materials',
        category: [
            'Fuel',
            'Gunpowder'
        ],
        categoryImg: [
            fuel,
            gunpowder
        ],
        iLevel: 29,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/f/fb/A11_item_043.png/revision/latest?cb=20120626024513'
    },
    {
        id: 28,
        name: 'Original Gem',
        main: 'Materials',
        category: [
            'Gemstone'
        ],
        categoryImg: [
            gemstone
        ],
        iLevel: 7,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/9/90/A12_Item_147.png/revision/latest?cb=20120906052037'
    },
    {
        id: 29,
        name: 'Isle Amber',
        main: 'Materials',
        category: [
            'Gemstone',
            'Medicinal'
        ],
        categoryImg: [
            gemstone,
            medicinal
        ],
        iLevel: 14,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/1/12/A11_item_055.png/revision/latest?cb=20120626024517'
    },
    {
        id: 30,
        name: 'Glow Sand',
        main: 'Materials',
        category: [
            'Plants',
            'Ore'
        ],
        categoryImg: [
            plant,
            ore
        ],
        iLevel: 21,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/c/ca/A11_item_029.png/revision/latest?cb=20120626024506'
    },
    {
        id: 31,
        name: 'Glow Grass',
        main: 'Materials',
        category: [
            'Plants',
            'Poison'
        ],
        categoryImg: [
            plant,
            poison
        ],
        iLevel: 17,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/b/b2/A11_item_015.png/revision/latest?cb=20130918142837'
    },
    {
        id: 32,
        name: 'Living Cactus',
        main: 'Materials',
        category: [
            'Plants',
            'Poison'
        ],
        categoryImg: [
            plant,
            poison
        ],
        iLevel: 30,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/6/6b/A12_Item_150.png/revision/latest?cb=20120906052038'
    },
    {
        id: 33,
        name: 'Hiding Cloud',
        main: 'Materials',
        category: [
            'Plants',
            'Mystery'
        ],
        categoryImg: [
            plant,
            mystery
        ],
        iLevel: 25,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/0/05/A11_item_037.png/revision/latest?cb=20120626024509'
    },
    {
        id: 34,
        name: 'Lotus',
        main: 'Materials',
        category: [
            'Plants',
            'Elixir'
        ],
        categoryImg: [
            plant,
            elixir
        ],
        iLevel: 19,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/4/47/Lotus.png/revision/latest?cb=20130918143728'
    },
    {
        id: 35,
        name: 'Glittery Water',
        main: 'Materials',
        category: [
            'Water',
            'Clay'
        ],
        categoryImg: [
            water,
            clay
        ],
        iLevel: 29,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 36,
        name: 'Dark Dew',
        main: 'Materials',
        category: [
            'Water',
            'Poison'
        ],
        categoryImg: [
            water,
            poison
        ],
        iLevel: 28,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/3/35/A11_item_053.png/revision/latest?cb=20120626024516'
    },
    {
        id: 37,
        name: 'Forest Dew',
        main: 'Materials',
        category: [
            'Water',
            'Elixir'
        ],
        categoryImg: [
            water,
            elixir
        ],
        iLevel: 35,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/3/39/A12_Item_236.png/revision/latest?cb=20120906052755'
    },
    {
        id: 38,
        name: 'Star Piece',
        main: 'Materials',
        category: [
            'Ore',
            'Mystery'
        ],
        categoryImg: [
            ore,
            mystery
        ],
        iLevel: 29,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/9/91/A11_item_036.png/revision/latest?cb=20120626024509'
    },
    {
        id: 39,
        name: 'Black Ore',
        main: 'Materials',
        category: [
            'Ore',
            'Gemstone'
        ],
        categoryImg: [
            ore,
            gemstone
        ],
        iLevel: 31,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/9/9b/Black_Ore.png/revision/latest?cb=20130918151148'
    },
    {
        id: 40,
        name: 'Magma Stone',
        main: 'Materials',
        category: [
            'Gunpowder',
            'Ore'
        ],
        categoryImg: [
            gunpowder,
            ore
        ],
        iLevel: 33,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/3/33/Magma_Stone.png/revision/latest?cb=20130918151149'
    },
    {
        id: 41,
        name: 'Mountain Pearl',
        main: 'Materials',
        category: [
            'Gemstone'
        ],
        categoryImg: [
            gemstone
        ],
        iLevel: 22,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/b/b0/Mountain_Pearl.png/revision/latest?cb=20130918201547'
    },
    {
        id: 42,
        name: 'Water Tree Fruit',
        main: 'Materials',
        category: [
            'Plants',
            'Spice',
            'Water'
        ],
        categoryImg: [
            plant,
            spice,
            water
        ],
        iLevel: 16,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/6/61/Tree_Fruit.png/revision/latest?cb=20140809041218'
    },
    {
        id: 43,
        name: 'Wispstone',
        main: 'Materials',
        category: [
            'Gemstone',
            'Mystery'
        ],
        categoryImg: [
            gemstone,
            mystery
        ],
        iLevel: 24,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/9/91/A12_Item_171.png/revision/latest?cb=20120906052045'
    },
    {
        id: 44,
        name: 'Azure Wing',
        main: 'Materials',
        category: [
            'Gemstone',
            'Mystery'
        ],
        categoryImg: [
            gemstone,
            mystery
        ],
        iLevel: 40,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/9/95/A12_Item_200.png/revision/latest?cb=20120906052056'
    },
    {
        id: 45,
        name: 'Eiche',
        main: 'Materials',
        category: [
            'Lumber'
        ],
        categoryImg: [
            lumber
        ],
        iLevel: 10,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/a/af/A11_item_004.png/revision/latest?cb=20120626024456'
    },
    {
        id: 46,
        name: 'Green Bamboo',
        main: 'Materials',
        category: [
            'Lumber',
            'Plants'
        ],
        categoryImg: [
            lumber,
            plant
        ],
        iLevel: 13,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/e/eb/A12_Item_201.png/revision/latest?cb=20120906052744'
    },
    {
        id: 47,
        name: 'Globe Sphere',
        main: 'Materials',
        category: [
            'Lumber'
        ],
        categoryImg: [
            lumber
        ],
        iLevel: 8,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/0/02/A11_item_062.png/revision/latest?cb=20120626024520'
    },
    {
        id: 48,
        name: 'Balloon Fruit',
        main: 'Materials',
        category: [
            'Vapor',
            'Plants'
        ],
        categoryImg: [
            vapor,
            plant
        ],
        iLevel: 12,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/c/ca/Balloon_Fruit.png/revision/latest?cb=20130918143727'
    },
    {
        id: 49,
        name: 'Undying Wind',
        main: 'Materials',
        category: [
            'Vapor',
            'Mystery'
        ],
        categoryImg: [
            vapor,
            mystery
        ],
        iLevel: 25,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/f/f6/Undying_Wind.png/revision/latest?cb=20130918201549'
    },
    {
        id: 50,
        name: 'Red Sand',
        main: 'Materials',
        category: [
            'Clay'
        ],
        categoryImg: [
            clay
        ],
        iLevel: 3,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 51,
        name: 'Natural Fertilizer',
        main: 'Materials',
        category: [
            'Clay',
            'Fuel',
            'Medicinal'
        ],
        categoryImg: [
            clay,
            fuel,
            medicinal
        ],
        iLevel: 10,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/d/d4/A12_Item_221.png/revision/latest?cb=20120906052752'
    },
    {
        id: 52,
        name: 'Original Soil',
        main: 'Materials',
        category: [
            'Clay',
            'Elixir'
        ],
        categoryImg: [
            clay,
            elixir
        ],
        iLevel: 27,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/8/86/Original_Soil.png/revision/latest?cb=20130918201547'
    },
    {
        id: 53,
        name: 'Crystal Piece',
        main: 'Materials',
        category: [
            'Mystery'
        ],
        categoryImg: [
            mystery
        ],
        iLevel: 4,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 54,
        name: 'Pendelook',
        main: 'Materials',
        category: [
            'Mystery',
            'Gemstone'
        ],
        categoryImg: [
            mystery,
            gemstone
        ],
        iLevel: 12,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/9/9a/A11_item_052.png/revision/latest?cb=20120626024516'
    },
    {
        id: 55,
        name: 'Black Runestone',
        main: 'Materials',
        category: [
            'Mystery',
            'Ore',
            'Poison'
        ],
        categoryImg: [
            mystery,
            ore,
            poison
        ],
        iLevel: 28,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/a/aa/A12_Item_172.png/revision/latest?cb=20120906052045'
    },
    {
        id: 56,
        name: 'Blessed Stone',
        main: 'Materials',
        category: [
            'Mystery',
            'Ore'
        ],
        categoryImg: [
            mystery,
            ore
        ],
        iLevel: 18,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/d/dc/A12_Item_160.png/revision/latest?cb=20120906052040'
    },
    {
        id: 57,
        name: 'Elemental Fragment',
        main: 'Materials',
        category: [
            'Mystery',
            'Elixir'
        ],
        categoryImg: [
            mystery,
            elixir
        ],
        iLevel: 13,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 58,
        name: 'Hidden Spell Page',
        main: 'Materials',
        category: [
            'Magic Tool',
            'Fuel'
        ],
        categoryImg: [
            magicTool,
            fuel
        ],
        iLevel: 10,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 59,
        name: 'Destroyed Grimoire',
        main: 'Materials',
        category: [
            'Magic Tool',
            'Fuel'
        ],
        categoryImg: [
            magicTool,
            fuel
        ],
        iLevel: 23,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 60,
        name: 'Small Sardine',
        main: 'Materials',
        category: [
            'Seafood'
        ],
        categoryImg: [
            seafood
        ],
        iLevel: 3,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 61,
        name: 'Butterfly Fish',
        main: 'Materials',
        category: [
            'Seafood'
        ],
        categoryImg: [
            seafood
        ],
        iLevel: 6,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/1/1a/A12_Item_188.png/revision/latest?cb=20120906052053'
    },
    {
        id: 62,
        name: 'Swirly Shell',
        main: 'Materials',
        category: [
            'Seafood',
            'Ore'
        ],
        categoryImg: [
            seafood,
            ore
        ],
        iLevel: 17,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/a/a8/A11_item_030.png/revision/latest?cb=20120626024506'
    },
    {
        id: 63,
        name: 'Bomb Fish',
        main: 'Materials',
        category: [
            'Seafood',
            'Gunpowder'
        ],
        categoryImg: [
            seafood,
            gunpowder
        ],
        iLevel: 14,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/0/00/A12_Item_189.png/revision/latest?cb=20120906052053'
    },
    {
        id: 64,
        name: 'Spike Tuna',
        main: 'Materials',
        category: [
            'Seafood'
        ],
        categoryImg: [
            seafood
        ],
        iLevel: 32,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/6/61/A12_Item_190.png/revision/latest?cb=20120906052053'
    },
    {
        id: 65,
        name: 'Killer Bee',
        main: 'Materials',
        category: [
            'Bug'
        ],
        categoryImg: [
            bug
        ],
        iLevel: 5,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 66,
        name: 'Honeypot Ant',
        main: 'Materials',
        category: [
            'Bug',
            'Spices'
        ],
        categoryImg: [
            bug,
            spice
        ],
        iLevel: 7,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/c/ce/A12_Item_193.png/revision/latest?cb=20120906052054'
    },
    {
        id: 67,
        name: 'Bitter Worm',
        main: 'Materials',
        category: [
            'Bug',
            'Medicinal'
        ],
        categoryImg: [
            bug,
            medicinal
        ],
        iLevel: 10,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/4/4b/A12_Item_196.png/revision/latest?cb=20120906052055'
    },
    {
        id: 68,
        name: 'Star Ladybug',
        main: 'Materials',
        category: [
            'Bug'
        ],
        categoryImg: [
            bug
        ],
        iLevel: 14,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/2/24/A12_Item_197.png/revision/latest?cb=20120906052055'
    },
    {
        id: 69,
        name: 'Poison Dragonfly',
        main: 'Materials',
        category: [
            'Bug',
            'Poison'
        ],
        categoryImg: [
            bug,
            poison
        ],
        iLevel: 22,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 70,
        name: 'Lunar Locust',
        main: 'Materials',
        category: [
            'Bug'
        ],
        categoryImg: [
            bug
        ],
        iLevel: 27,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 71,
        name: 'Gold Scarab',
        main: 'Materials',
        category: [
            'Bug',
            'Gemstone'
        ],
        categoryImg: [
            bug,
            gemstone
        ],
        iLevel: 33,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/d/de/A12_Item_194.png/revision/latest?cb=20120906052054'
    },
    {
        id: 72,
        name: 'Bat Wing',
        main: 'Materials',
        category: [
            'Animal Products'
        ],
        categoryImg: [
            animalProduct
        ],
        iLevel: 5,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 73,
        name: 'Beast Fur',
        main: 'Materials',
        category: [
            'Animal Products',
            'Threads'
        ],
        categoryImg: [
            animalProduct,
            thread
        ],
        iLevel: 9,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/4/47/A11_item_048.png/revision/latest?cb=20120626024514'
    },
    {
        id: 74,
        name: 'Swift Lizard Tail',
        main: 'Materials',
        category: [
            'Animal Products'
        ],
        categoryImg: [
            animalProduct
        ],
        iLevel: 11,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/e/e8/Lizard_Tail.png/revision/latest?cb=20130918160727'
    },
    {
        id: 75,
        name: 'Forgotten Bone',
        main: 'Materials',
        category: [
            'Animal Products',
            'Medicinal'
        ],
        categoryImg: [
            animalProduct,
            medicinal
        ],
        iLevel: 9,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/4/41/A11_item_027.png/revision/latest?cb=20120626024505'
    },
    {
        id: 76,
        name: 'Isle Fish Fillet',
        main: 'Materials',
        category: [
            'Animal Products',
            'Threads'
        ],
        categoryImg: [
            animalProduct,
            thread
        ],
        iLevel: 12,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 77,
        name: 'Archfiend Claw',
        main: 'Materials',
        category: [
            'Animal Products',
            'Poison'
        ],
        categoryImg: [
            animalProduct,
            poison
        ],
        iLevel: 25,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 78,
        name: 'Sacred Bird Wing',
        main: 'Materials',
        category: [
            'Animal Products',
            'Elixir'
        ],
        categoryImg: [
            animalProduct,
            elixir
        ],
        iLevel: 41,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 79,
        name: 'Mudhead',
        main: 'Materials',
        category: [
            'Mushroom',
            'Elixir'
        ],
        categoryImg: [
            mushroom,
            elixir
        ],
        iLevel: 9,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/5/5a/A11_item_003.png/revision/latest?cb=20120813110851'
    },
    {
        id: 80,
        name: 'Eicheloa',
        main: 'Materials',
        category: [
            'Mushroom',
            'Vapor'
        ],
        categoryImg: [
            mushroom,
            vapor
        ],
        iLevel: 12,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/b/b8/A11_item_002.png/revision/latest?cb=20120626024456'
    },
    {
        id: 81,
        name: 'Ghost House',
        main: 'Materials',
        category: [
            'Mushroom',
            'Poison'
        ],
        categoryImg: [
            mushroom,
            poison
        ],
        iLevel: 26,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/0/0f/Ghost_House.png/revision/latest?cb=20130918151148'
    },
    {
        id: 82,
        name: 'Royal Crown',
        main: 'Materials',
        category: [
            'Mushroom',
            'Gemstone'
        ],
        categoryImg: [
            mushroom,
            gemstone
        ],
        iLevel: 30,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/a/a3/Royal_Crown.png/revision/latest?cb=20130918145658'
    },
    {
        id: 83,
        name: 'Beast Meat',
        main: 'Materials',
        category: [
            'Meat',
            'Animal Products'
        ],
        categoryImg: [
            meat,
            animalProduct
        ],
        iLevel: 8,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 84,
        name: 'Fresh Meat',
        main: 'Materials',
        category: [
            'Meat',
            'Animal Products'
        ],
        categoryImg: [
            meat,
            animalProduct
        ],
        iLevel: 14,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 85,
        name: 'Wheat',
        main: 'Materials',
        category: [
            'Plants',
            'Vegetables'
        ],
        categoryImg: [
            plant,
            vegetable
        ],
        iLevel: 5,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/3/38/A12_Item_227.png/revision/latest?cb=20120906052753'
    },
    {
        id: 86,
        name: 'Beehive',
        main: 'Materials',
        category: [
            'Vegetables',
            'Gunpowder'
        ],
        categoryImg: [
            vegetable,
            gunpowder
        ],
        iLevel: 3,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/f/f1/A11_item_006.png/revision/latest?cb=20120626024457'
    },
    {
        id: 87,
        name: 'Hard Potato',
        main: 'Materials',
        category: [
            'Vegetables',
            'Plants'
        ],
        categoryImg: [
            vegetable,
            plant
        ],
        iLevel: 3,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 88,
        name: 'Carrot',
        main: 'Materials',
        category: [
            'Vegetables',
            'Plants'
        ],
        categoryImg: [
            vegetable,
            plant
        ],
        iLevel: 3,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/c/c3/Carrot.png/revision/latest?cb=20130918201546'
    },
    {
        id: 89,
        name: 'Forest Cabbage',
        main: 'Materials',
        category: [
            'Vegetables',
            'Plants'
        ],
        categoryImg: [
            vegetable,
            plant
        ],
        iLevel: 8,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/5/58/A11_item_061.png/revision/latest?cb=20120626024520'
    },
    {
        id: 90,
        name: 'Rock Salt',
        main: 'Materials',
        category: [
            'Spice',
            'Ore'
        ],
        categoryImg: [
            spice,
            ore
        ],
        iLevel: 4,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/8/83/A12_Item_163.png/revision/latest?cb=20120906052043'
    },
    {
        id: 91,
        name: 'Chariot Milk',
        main: 'Materials',
        category: [
            'Spices',
            'Water'
        ],
        categoryImg: [
            spice,
            water
        ],
        iLevel: 8,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/7/79/A12_Item_226.png/revision/latest?cb=20120906052753'
    },
    {
        id: 92,
        name: 'Nostalgic Spice',
        main: 'Materials',
        category: [
            'Spices'
        ],
        categoryImg: [
            spice
        ],
        iLevel: 8,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 93,
        name: 'Magic Grass',
        main: 'Materials',
        category: [
            'Medicinal',
            'Plants'
        ],
        categoryImg: [
            medicinal,
            plant
        ],
        iLevel: 5,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/7/78/A11_item_001.png/revision/latest?cb=20120626024456'
    },
    {
        id: 94,
        name: 'Serenity Flower',
        main: 'Materials',
        category: [
            'Medicinal',
            'Elixir'
        ],
        categoryImg: [
            medicinal,
            elixir
        ],
        iLevel: 24,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/1/1a/A12_Item_233.png/revision/latest?cb=20120906052754'
    },
    {
        id: 95,
        name: 'Dizzy Cap Spore',
        main: 'Materials',
        category: [
            'Medicinal',
            'Poison',
            'Spices'
        ],
        categoryImg: [
            medicinal,
            poison,
            spice
        ],
        iLevel: 14,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/4/47/A12_Item_152.png/revision/latest?cb=20120906052038'
    },
    {
        id: 96,
        name: 'Sage Herb',
        main: 'Materials',
        category: [
            'Medicinal',
            'Poison',
            'Elixir'
        ],
        categoryImg: [
            medicinal,
            poison,
            elixir
        ],
        iLevel: 30,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/6/61/A12_Item_235.png/revision/latest?cb=20120906052755'
    },
    {
        id: 97,
        name: 'Large Scale',
        main: 'Materials',
        category: [
            'Medicinal',
            'Mystery',
            'Elixir'
        ],
        categoryImg: [
            medicinal,
            mystery,
            elixir
        ],
        iLevel: 31,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 98,
        name: 'Mandrake Elixir',
        main: 'Materials',
        category: [
            'Poison',
            'Plants'
        ],
        categoryImg: [
            poison,
            plant
        ],
        iLevel: 23,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 99,
        name: 'Wicked Bone',
        main: 'Materials',
        category: [
            'Poison',
            'Animal Products'
        ],
        categoryImg: [
            poison,
            animalProduct
        ],
        iLevel: 14,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 100,
        name: 'Wicked Fang',
        main: 'Materials',
        category: [
            'Poison',
            'Animal Products'
        ],
        categoryImg: [
            poison,
            animalProduct
        ],
        iLevel: 18,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 101,
        name: 'Boa Venom Gland',
        main: 'Materials',
        category: [
            'Poison',
            'Animal Products'
        ],
        categoryImg: [
            poison,
            animalProduct
        ],
        iLevel: 23,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/0/04/A12_Item_216.png/revision/latest?cb=20120906052747'
    },
    {
        id: 102,
        name: 'Night Lady',
        main: 'Materials',
        category: [
            'Poison',
            'Plants',
            'Threads'
        ],
        categoryImg: [
            poison,
            plant,
            thread
        ],
        iLevel: 28,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/6/6d/A11_item_039.png/revision/latest?cb=20120626024510'
    },
    {
        id: 103,
        name: 'Ghost Orb',
        main: 'Materials',
        category: [
            'Poison',
            'Mystery'
        ],
        categoryImg: [
            poison,
            mystery
        ],
        iLevel: 34,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 104,
        name: 'Blue Puniball',
        main: 'Materials',
        category: [
            'Puniball'
        ],
        categoryImg: [
            puniball
        ],
        iLevel: 8,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/b/bc/A11_item_047.png/revision/latest?cb=20120626024513'
    },
    {
        id: 105,
        name: 'Green Puniball',
        main: 'Materials',
        category: [
            'Puniball'
        ],
        categoryImg: [
            puniball
        ],
        iLevel: 8,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/b/bc/A11_item_047.png/revision/latest?cb=20120626024513'
    },
    {
        id: 106,
        name: 'Red Puniball',
        main: 'Materials',
        category: [
            'Puniball'
        ],
        categoryImg: [
            puniball
        ],
        iLevel: 8,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/b/bc/A11_item_047.png/revision/latest?cb=20120626024513'
    },
    {
        id: 107,
        name: 'Puni Fluid',
        main: 'Materials',
        category: [
            'Puniball',
            'Water'
        ],
        categoryImg: [
            puniball,
            water
        ],
        iLevel: 5,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 108,
        name: 'Gold Puniball',
        main: 'Materials',
        category: [
            'Puniball',
            'Gemstone'
        ],
        categoryImg: [
            puniball,
            gemstone
        ],
        iLevel: 21,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/b/bc/A11_item_047.png/revision/latest?cb=20120626024513'
    },
    {
        id: 109,
        name: 'Dragon Meat',
        main: 'Materials',
        category: [
            'Dragon',
            'Meat'
        ],
        categoryImg: [
            dragon,
            meat
        ],
        iLevel: 28,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/2/26/Dragon_Meat.png/revision/latest?cb=20130918154754'
    },
    {
        id: 110,
        name: 'Dragon Horn',
        main: 'Materials',
        category: [
            'Dragon',
            'Medicinal',
            'Elixir'
        ],
        categoryImg: [
            dragon,
            medicinal,
            elixir
        ],
        iLevel: 32,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 111,
        name: 'Dragon Scale',
        main: 'Materials',
        category: [
            'Dragon',
            'Mystery',
            'Elixir'
        ],
        categoryImg: [
            dragon,
            mystery,
            elixir
        ],
        iLevel: 26,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 112,
        name: 'Dragon Piece',
        main: 'Materials',
        category: [
            'Dragon',
            'Mystery',
            'Gemstone'
        ],
        categoryImg: [
            dragon,
            mystery,
            gemstone
        ],
        iLevel: 31,
        img: 'https://via.placeholder.com/100x100'
    },
    {
        id: 113,
        name: 'THAT Egg',
        main: 'Materials',
        category: [
            'Fuel',
            'Elixir'
        ],
        categoryImg: [
            fuel,
            elixir
        ],
        iLevel: 28,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/4/44/A11_item_022.png/revision/latest?cb=20120626024504'
    },
    {
        id: 114,
        name: 'Sour Apple King',
        main: 'Materials',
        category: [
            'Plants',
            'Vegetables'
        ],
        categoryImg: [
            plant,
            vegetable
        ],
        iLevel: 25,
        img: 'https://vignette.wikia.nocookie.net/atelierseries/images/1/14/A11_item_025.png/revision/latest?cb=20120626024505'
    },
    {
        id: 115,
        name: 'Fish Whiskers',
        main: 'Materials',
        category: [
            'Threads',
            'Animal Products'
        ],
        categoryImg: [
            thread,
            animalProduct
        ],
        iLevel: 6,
        img: 'https://via.placeholder.com/100x100'
    },
]

export default mats