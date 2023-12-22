import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from './ResturantCard';

export default function FeaturedRow({id ,title, description}) {
  return (
    <View>
        <View className=" mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB"/>
        </View>

        <Text className="text-xs text-gray-400 px-4" >{description}</Text>

        <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal:15,

        }}
        showsHorizontalScrollIndicator={false}
        className=" pt-4"
        >
            <ResturantCard
             id={1234}
             imgUrl="https://www.tastingtable.com/img/gallery/the-ingredient-traditional-sushi-never-uses/intro-1663275947.webp"
             title="Sushi Palace"
             rating={4.8}
             genre="Sushi"
             address={"456 Oak St"}
             shortDescription="Sushi Palace offers an extensive menu of traditional and modern sushi, sashimi, and rolls. With a serene ambiance and top-notch service, it's the perfect spot for a delightful dining experience."
             dishes={[
               { id: 1, name: "Sashimi Platter", description: "Fresh assortment of premium sashimi", price: 25.99, image: "https://i.redd.it/x8v24levp7841.jpg" },
               { id: 2, name: "Dragon Roll", description: "Eel, avocado, and cucumber", price: 18.99, image: "https://www.sushisushi.co.uk/cdn/shop/articles/Dragon_Rolls_1112x.jpg?v=1627390703" },
               { id: 3, name: "Tempura Udon", description: "Udon noodles in a savory broth with tempura", price: 14.99, image: "https://keepingitrelle.com/wp-content/uploads/2022/08/Shrimp-Tempura-Udon-3-683x1024.jpg" },
               { id: 4, name: "Miso Soup", description: "Traditional Japanese soybean paste soup", price: 5.99, image: "https://assets.bonappetit.com/photos/58a6240fa9bc8a7a3f1cfada/1:1/w_2240,c_limit/classic-miso-soup.jpg" },
               { id: 5, name: "Green Tea Ice Cream", description: "Refreshing and creamy dessert", price: 7.99, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Matcha_ice_cream_001.jpg/500px-Matcha_ice_cream_001.jpg" },
               { id: 6, name: "Salmon Nigiri", description: "Fresh salmon on a small bed of rice", price: 9.99, image: "https://images.ricardocuisine.com/services/recipes/992x1340_7489.jpg" }
             ]}
             long={20}
             lat={0}
            />
            <ResturantCard
             id={5678}
             imgUrl="https://www.kitchensanctuary.com/wp-content/uploads/2020/12/Quick-Chicken-Ramen-Tall-FS-8.webp"
             title="Ramen House"
             rating={4.5}
             genre="Ramen"
             address={"789 Elm St"}
             shortDescription="Ramen House is renowned for its authentic ramen dishes, featuring a rich variety of broths and toppings. The cozy setting and friendly staff make it a go-to spot for a comforting meal."
             dishes={[
               { id: 7, name: "Tonkotsu Ramen", description: "Pork bone broth with ramen noodles", price: 15.99, image: "https://example.com/tonkotsu-ramen.jpg" },
               { id: 8, name: "Miso Ramen", description: "Soybean paste broth with ramen noodles", price: 14.99, image: "https://example.com/miso-ramen.jpg" },
               { id: 9, name: "Shoyu Ramen", description: "Soy sauce flavored broth with ramen noodles", price: 14.99, image: "https://example.com/shoyu-ramen.jpg" },
               { id: 10, name: "Gyoza", description: "Pan-fried dumplings with pork and vegetable filling", price: 8.99, image: "https://example.com/gyoza.jpg" },
               { id: 11, name: "Karaage", description: "Japanese fried chicken", price: 10.99, image: "https://example.com/karaage.jpg" },
               { id: 12, name: "Matcha Latte", description: "Green tea latte with milk and matcha powder", price: 6.99, image: "https://example.com/matcha-latte.jpg" }
             ]}
             long={20}
             lat={0}
            />
            <ResturantCard
             id={91011}
             imgUrl="https://www.venturafoods.com/wp-content/uploads/2022/03/c701d0ef-c408-49bf-b9b4-4841656a2629.jpg"
             title="Tempura Garden"
             rating={4.7}
             genre="Tempura"
             address={"1011 Pine St"}
             shortDescription="At Tempura Garden, indulge in crispy tempura served with a delectable dipping sauce and fragrant rice. The inviting atmosphere and attentive service ensure a memorable dining experience."
             dishes={[
               { id: 13, name: "Shrimp Tempura", description: "Crispy battered shrimp", price: 17.99, image: "https://example.com/shrimp-tempura.jpg" },
               { id: 14, name: "Vegetable Tempura", description: "Assorted crispy fried vegetables", price: 12.99, image: "https://example.com/vegetable-tempura.jpg" },
               { id: 15, name: "Tempura Soba", description: "Buckwheat noodles with tempura", price: 14.99, image: "https://example.com/tempura-soba.jpg" },
               { id: 16, name: "Miso Soup", description: "Traditional Japanese soybean paste soup", price: 5.99, image: "https://example.com/miso-soup.jpg" },
               { id: 17, name: "Green Tea Ice Cream", description: "Refreshing and creamy dessert", price: 7.99, image: "https://example.com/green-tea-ice-cream.jpg" },
               { id: 18, name: "Matcha Pudding", description: "Silky matcha flavored pudding", price: 8.99, image: "https://example.com/matcha-pudding.jpg" }
             ]}
             long={20}
             lat={0}
            />
            <ResturantCard
             id={121314}
             imgUrl="https://sushicovehalifax.com/wp-content/uploads/2020/11/Nigiri-vs-Sashimi_-Whats-the-Difference.jpg"
             title="Sashimi Cove"
             rating={4.9}
             genre="Sashimi"
             address={"1314 Cedar St"}
             shortDescription="Sashimi Cove offers an array of fresh and succulent sashimi platters, showcasing a diverse selection of premium fish. The elegant setting and impeccable service ensure an extraordinary dining affair."
             dishes={[
               { id: 19, name: "Salmon Sashimi", description: "Fresh slices of salmon", price: 22.99, image: "https://example.com/salmon-sashimi.jpg" },
               { id: 20, name: "Tuna Sashimi", description: "Delicate slices of tuna", price: 24.99, image: "https://example.com/tuna-sashimi.jpg" },
               { id: 21, name: "Yellowtail Sashimi", description: "Buttery slices of yellowtail", price: 26.99, image: "https://example.com/yellowtail-sashimi.jpg" },
               { id: 22, name: "Miso Soup", description: "Traditional Japanese soybean paste soup", price: 5.99, image: "https://example.com/miso-soup.jpg" },
               { id: 23, name: "Green Tea Ice Cream", description: "Refreshing and creamy dessert", price: 7.99, image: "https://example.com/green-tea-ice-cream.jpg" },
               { id: 24, name: "Matcha Cheesecake", description: "Rich and creamy matcha flavored cheesecake", price: 9.99, image: "https://example.com/matcha-cheesecake.jpg" }
             ]}
             long={20}
             lat={0}
            />
            <ResturantCard
             id={151617}
             imgUrl="https://i.ndtvimg.com/i/2018-01/japanese-bento-box_620x350_81516279499.jpg"
             title="Bento Box"
             rating={4.6}
             genre="Bento"
             address={"1516 Walnut St"}
             shortDescription="Bento Box offers customizable bento boxes with a delectable selection of sides, providing a delightful and convenient dining experience. The warm ambiance and prompt service ensure a satisfying meal."
             dishes={[
               { id: 25, name: "Teriyaki Chicken", description: "Grilled chicken with teriyaki sauce", price: 16.99, image: "https://example.com/teriyaki-chicken.jpg" },
               { id: 26, name: "Beef Bulgogi", description: "Marinated beef with vegetables", price: 18.99, image: "https://example.com/beef-bulgogi.jpg" },
               { id: 27, name: "California Roll", description: "Crab, avocado, and cucumber sushi roll", price: 12.99, image: "https://example.com/california-roll.jpg" },
               { id: 28, name: "Miso Soup", description: "Traditional Japanese soybean paste soup", price: 5.99, image: "https://example.com/miso-soup.jpg" },
               { id: 29, name: "Green Tea Ice Cream", description: "Refreshing and creamy dessert", price: 7.99, image: "https://example.com/green-tea-ice-cream.jpg" },
               { id: 30, name: "Matcha Latte", description: "Green tea latte with milk and matcha powder", price: 6.99, image: "https://example.com/matcha-latte.jpg" }
             ]}
             long={20}
             lat={0}
            />
            <ResturantCard
             id={212223}
             imgUrl="https://i0.wp.com/sushipalacenj.com/wp-content/uploads/2020/06/riccardo-bergamini-O2yNzXdqOu0-unsplash-1-scaled.jpg?resize=600%2C480&ssl=1"
             title="Sushi Palace"
             rating={4.8}
             genre="Sushi"
             address={"2122 Oak St"}
             shortDescription="Sushi Palace offers an extensive selection of fresh and flavorful sushi, prepared with the finest ingredients and traditional techniques. The serene ambiance and attentive service ensure a memorable dining experience."
             dishes={[
               { id: 31, name: "Rainbow Roll", description: "Colorful and flavorful sushi roll", price: 20.99, image: "https://example.com/rainbow-roll.jpg" },
               { id: 32, name: "Spicy Tuna Roll", description: "Tuna and spicy mayo sushi roll", price: 18.99, image: "https://example.com/spicy-tuna-roll.jpg" },
               { id: 33, name: "Edamame", description: "Steamed soybeans with sea salt", price: 6.99, image: "https://example.com/edamame.jpg" },
               { id: 34, name: "Miso Soup", description: "Traditional Japanese soybean paste soup", price: 5.99, image: "https://example.com/miso-soup.jpg" },
               { id: 35, name: "Green Tea Ice Cream", description: "Refreshing and creamy dessert", price: 7.99, image: "https://example.com/green-tea-ice-cream.jpg" },
               { id: 36, name: "Matcha Pudding", description: "Silky matcha flavored pudding", price: 8.99, image: "https://example.com/matcha-pudding.jpg" }
             ]}
             long={20}
             lat={0}
            />
            <ResturantCard
             id={242526}
             imgUrl="https://tacotuesday-backup.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/06/27162448/tacos-and-champagne.jpg"
             title="Taco Haven"
             rating={4.6}
             genre="Taco"
             address={"2425 Pine St"}
             shortDescription="Taco Haven serves up a tantalizing array of authentic Mexican tacos, bursting with bold flavors and fresh ingredients. The vibrant atmosphere and lively music create a festive dining environment."
             dishes={[
               { id: 37, name: "Carne Asada Tacos", description: "Grilled steak tacos with salsa and guacamole", price: 14.99, image: "https://example.com/carne-asada-tacos.jpg" },
               { id: 38, name: "Al Pastor Tacos", description: "Marinated pork tacos with pineapple and onions", price: 12.99, image: "https://example.com/al-pastor-tacos.jpg" },
               { id: 39, name: "Carnitas Tacos", description: "Slow-cooked pork tacos with cilantro and onions", price: 13.99, image: "https://example.com/carnitas-tacos.jpg" },
               { id: 40, name: "Elote", description: "Grilled Mexican street corn with cotija cheese", price: 7.99, image: "https://example.com/elote.jpg" },
               { id: 41, name: "Churros", description: "Crispy fried dough with cinnamon and sugar", price: 6.99, image: "https://example.com/churros.jpg" },
               { id: 42, name: "Horchata", description: "Sweet rice milk with cinnamon and vanilla", price: 5.99, image: "https://example.com/horchata.jpg" }
             ]}
             long={20}
             lat={0}
            />
            <ResturantCard
             id={272829}
             imgUrl="https://pbs.twimg.com/media/CNmFgBfVEAAPUc8?format=jpg&name=900x900"
             title="Pasta Paradise"
             rating={4.9}
             genre="Pasta"
             address={"2728 Walnut St"}
             shortDescription="Pasta Paradise offers a delectable assortment of freshly made pasta dishes, featuring a variety of sauces and toppings to satisfy every palate. The cozy setting and aromatic scents create a warm and inviting dining atmosphere."
             dishes={[
               { id: 43, name: "Spaghetti Bolognese", description: "Classic meat sauce with spaghetti", price: 16.99, image: "https://example.com/spaghetti-bolognese.jpg" },
               { id: 44, name: "Fettuccine Alfredo", description: "Creamy parmesan sauce with fettuccine pasta", price: 15.99, image: "https://example.com/fettuccine-alfredo.jpg" },
               { id: 45, name: "Linguine Pesto", description: "Basil and pine nut pesto with linguine pasta", price: 14.99, image: "https://example.com/linguine-pesto.jpg" },
               { id: 46, name: "Garlic Bread", description: "Toasted bread with garlic and herb butter", price: 5.99, image: "https://example.com/garlic-bread.jpg" },
               { id: 47, name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: 8.99, image: "https://example.com/tiramisu.jpg" },
               { id: 48, name: "Affogato", description: "Espresso poured over vanilla gelato", price: 7.99, image: "https://example.com/affogato.jpg" }
             ]}
             long={20}
             lat={0}
            />
            <ResturantCard
             id={303132}
             imgUrl="https://static.wixstatic.com/media/dfdfac_7d44df5209a74b3a899ba7d063958955~mv2_d_4896_3264_s_4_2.jpg/v1/crop/x_238,y_0,w_4419,h_3264/fill/w_612,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSCF8162_JPG.jpg"
             title="Burger Bistro"
             rating={4.7}
             genre="Burger"
             address={"3031 Cedar St"}
             shortDescription="Burger Bistro is known for its mouthwatering burgers, crafted with premium ingredients and served with a side of crispy fries. The casual setting and friendly service make it a perfect spot for a satisfying meal."
             dishes={[
               { id: 49, name: "Classic Cheeseburger", description: "Beef patty with cheddar cheese and special sauce", price: 13.99, image: "https://example.com/classic-cheeseburger.jpg" },
               { id: 50, name: "BBQ Bacon Burger", description: "Beef patty with bacon, BBQ sauce, and onion rings", price: 15.99, image: "https://example.com/bbq-bacon-burger.jpg" },
               { id: 51, name: "Veggie Burger", description: "Plant-based patty with lettuce, tomato, and avocado", price: 12.99, image: "https://example.com/veggie-burger.jpg" },
               { id: 52, name: "Onion Rings", description: "Crispy battered onion rings", price: 6.99, image: "https://example.com/onion-rings.jpg" },
               { id: 53, name: "Chocolate Milkshake", description: "Rich and creamy chocolate milkshake", price: 7.99, image: "https://example.com/chocolate-milkshake.jpg" },
               { id: 54, name: "Apple Pie", description: "Warm apple pie with a flaky crust", price: 8.99, image: "https://example.com/apple-pie.jpg" }
             ]}
             long={20}
             lat={0}
            />
            <ResturantCard
             id={333435}
             imgUrl="https://www.wearegurgaon.com/wp-content/uploads/2022/04/tonys-italian-pizza-sushant-lok-gurgaon-8.jpg"
             title="Pizza Piazza"
             rating={4.8}
             genre="Pizza"
             address={"3334 Elm St"}
             shortDescription="Pizza Piazza offers a delectable selection of wood-fired pizzas, featuring a variety of gourmet toppings and a crispy, thin crust. The cozy ambiance and authentic flavors ensure a delightful dining experience."
             dishes={[
               { id: 55, name: "Margherita Pizza", description: "Classic pizza with tomato, mozzarella, and basil", price: 12.99, image: "https://example.com/margherita-pizza.jpg" },
               { id: 56, name: "Pepperoni Pizza", description: "Pizza with spicy pepperoni and mozzarella", price: 14.99, image: "https://example.com/pepperoni-pizza.jpg" },
               { id: 57, name: "Vegetarian Pizza", description: "Pizza with assorted vegetables and cheese", price: 13.99, image: "https://example.com/vegetarian-pizza.jpg" },
               { id: 58, name: "BBQ Chicken Pizza", description: "Pizza with BBQ chicken and red onions", price: 15.99, image: "https://example.com/bbq-chicken-pizza.jpg" },
               { id: 59, name: "Mushroom Truffle Pizza", description: "Pizza with truffle oil and assorted mushrooms", price: 16.99, image: "https://example.com/mushroom-truffle-pizza.jpg" },
               { id: 60, name: "Hawaiian Pizza", description: "Pizza with ham, pineapple, and mozzarella", price: 14.99, image: "https://example.com/hawaiian-pizza.jpg" }
             ]}
             long={20}
             lat={0}
            />
        </ScrollView>
    </View>
  )
}