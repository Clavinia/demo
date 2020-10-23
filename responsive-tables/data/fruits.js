// Fruit data

let fruits = {
    apple: {
        name: 'Apple',
        image: 'apple',
        protein: '0.47 g',
        calories: '95 kcal',
        fiber: '4.4 g',
        minerals: {
            potassium: '195 mg',
            phosphorous: '20 mg',
            calcium: '11 mg',
            magnesium: '9 mg',
            sodium: '2 mg',
            iron: '0.22 mg',
            zinc: '0.07 mg',
            manganese: '0.064 mg',
            copper: '0.049 mg',
            selenium: ''
        },
        vitamins: {
            vitaminA: '98 IU',
            vitaminC: '8.4 mg',
            vitaminB6: '0.075 mg',
            vitaminB2: '0.047 mg',
            vitaminB1: '0.031 mg',
            vitaminE: '0.33 mg',
            vitaminK: '4 mcg',
            niacin: '0.166 mg',
            folate: '5 mcg',
            pantothenicAcid: '0.111 mg'
        }
    },
    avocado: {
        name: 'Avocado',
        image: 'avocado',
        protein: '4.02 g',
        calories: '322 kcal',
        fiber: '13.5 g',
        minerals: {
            potassium: '975 mg',
            phosphorous: '105 mg',
            magnesium: '58 mg',
            calcium: '24 mg',
            sodium: '14 mg',
            iron: '1.11 mg',
            manganese: '0.285 mg',
            zinc: '1.29 mg',
            selenium: '0.8 mcg',
            copper: '0.382 mg'
        },
        vitamins: {
            vitaminA: '293 IU',
            vitaminC: '20.1 mg',
            vitaminE: '4.16 mg',
            pantothenicAcid: '2.792 mg',
            niacin: '3.493 mg',
            vitaminB6: '0.517 mg',
            vitaminK: '0.422 mg',
            vitaminB1: '0.135 mg',
            vitaminB2: '0.261 mg',
            folate: '163 mcg'
        }
    },
    banana: {
        name: 'Banana',
        image: 'banana',
        protein: '1.29 g',
        calories: '105 kcal',
        fiber: '3.1 g',
        minerals: {
            potassium: '422 mg',
            magnesium: '32 mg',
            phosphorous: '26 mg',
            calcium: '6 mg',
            sodium: '1 mg',
            iron: '0.31 mg',
            manganese: '0.319 mg',
            selenium: '1.2 mcg',            
            zinc: '0.18 mg',
            copper: '0.092 mg'
        },
        vitamins: {
            vitaminA: '76 IU',
            vitaminC: '10.3 mg',
            niacin: '0.785 mg',
            vitaminK: '0.6 mcg',
            vitaminB6: '0.433 mg',
            pantothenicAcid: '0.394 mg',
            vitaminE: '0.12 mg',
            vitaminB1: '0.037 mg',
            vitaminB2: '0.086 mg',
            folate: '24 mcg'
        }
    },
    kiwi: {
        name: 'Kiwi',
        image: 'kiwi',
        protein: '0.79 g',
        calories: '42 kcal',
        fiber: '2.1 g',
        minerals: {
            potassium: '215 mg',
            phosphorous: '23 mg',
            calcium: '23 mg',
            magnesium: '12 mg',
            sodium: '2 mg',
            iron: '0.21 mg',
            zinc: '0.1 mg',
            manganese: '0.068 mg',
            copper: '0.09 mg',
            selenium: '0.1 mg'
        },
        vitamins: {
            vitaminC: '64 mg',
            vitaminA: '60 IU',
            vitaminE: '1.01 mg',
            vitaminK: '27.8 mcg',
            folate: '17 mcg',
            vitaminB6: '0.043 mg',
            vitaminB2: '0.017 mg',
            vitaminB1: '0.019 mg',
            niacin: '0.235 mg',
            pantothenicAcid: '0.126 mg'
        }
    },
    lemon: {
        name: 'Lemon',
        image: 'lemon',
        protein: '0.92 g',
        calories: '24 kcal',
        fiber: '2.4 g',
        minerals: {
            potassium: '116 mg',
            calcium: '22 mg',
            phosphorous: '13 mg',
            magnesium: '7 mg',
            sodium: '2 mg',
            iron: '0.5 mg',
            zinc: '0.05 mg',
            manganese: '0.025 mg',
            copper: '0.031 mg',
            selenium: '0.3 mcg'
        },
        vitamins: {
            vitaminC: '44.5 mg',
            vitaminA: '18 IU',
            vitaminE: '0.13 mg',
            vitaminK: '27.8 mcg',
            folate: '9 mcg',
            vitaminB6: '0.067 mg',
            vitaminB2: '0.017 mg',
            vitaminB1: '0.034 mg',
            niacin: '0.084 mg',
            pantothenicAcid: '0.16 mg'
        }
    },
    mango: {
        name: 'Mango',
        image: 'mango',
        protein: '1.6 g',
        calories: '135 kcal',
        fiber: '3.7 g',
        minerals: {
            potassium: '323 mg',
            phosphorous: '23 mg',
            calcium: '21 mg',
            magnesium: '19 mg',
            sodium: '4 mg',
            iron: '0.27 mg',
            manganese: '0.056 mg',
            zinc: '0.08 mg',
            selenium: '1.2 mcg',
            copper: '0.228 mg'
        },
        vitamins: {
            vitaminA: '1584 IU',
            vitaminC: '57.3 mg',
            vitaminE: '2.32 mg',
            niacin: '1.209 mg',
            pantothenicAcid: '0.331 mg',
            vitaminB6: '0.227 mg',
            vitaminK: '8.7 mcg',
            vitaminB1: '0.12 mg',
            vitaminB2: '0.118 mg',
            folate: '29 mcg'
        }
    },
    pear: {
        name: 'Pear',
        image: 'pear',
        protein: '0.68 g',
        calories: '103 kcal',
        fiber: '5.5 g',
        minerals: {
            potassium: '212 mg',
            phosphorous: '20 mg',
            calcium: '16 mg',
            magnesium: '12 mg',
            sodium: '2 mg',
            iron: '0.3 mg',
            manganese: '0.087 mg',
            zinc: '0.18 mg',
            selenium: '0.2 mcg',
            copper: '0.146 mg'
        },
        vitamins: {
            vitaminA: '41 IU',
            vitaminC: '7.5 mg',
            niacin: '0.279 mg',
            vitaminE: '0.21 mg',
            pantothenicAcid: '0.085 mg',
            vitaminB6: '0.05 mg',
            vitaminK: '8 mcg',
            vitaminB1: '0.021 mg',
            vitaminB2: '0.045 mg',
            folate: '12 mcg'
        }
    },
    pineapple: {
        name: 'Pineapple',
        image: 'pineapple',
        protein: '0.89 g',
        calories: '82 kcal',
        fiber: '2.3 g',
        minerals: {
            potassium: '180 mg',
            calcium: '21 mg',
            magnesium: '20 mg',
            phosphorous: '13 mg',
            sodium: '2 mg',
            iron: '0.48 mg',
            manganese: '1.53 mg',
            zinc: '0.2 mg',
            selenium: '0.2 mcg',
            copper: '0.181 mcg'
        },
        vitamins: {
            vitaminC: '78.9 mg',
            vitaminA: '96 IU',
            niacin: '0.825 mg',
            vitaminB6: '0.185 mg',
            vitaminE: '0.03 mg',
            pantothenicAcid: '0.351 mg',
            vitaminK: '1.2 mcg',
            vitaminB1: '0.13 mg',
            vitaminB2: '0.053 mg',
            folate: '30 mcg'
        }
    }
}

export default fruits;