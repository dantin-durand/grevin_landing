const subscriptionTypes = [
  {
    title: 'FORMULE<br>Duo',
    description: 'En duo ! En couple !<br>Venez vous amuser !',
    options: [
      {
        description: 'Entrée <span class="text-red font-bold">4 fois par mois</span>',
        isEnable: true,
      },
      {
        description: 'Valable pour <span class="text-red font-bold">2</span> personnes nominatives',
        isEnable: true,
      },
      {
        description: 'Accès aux expos <span class="text-red font-bold">Permament</span> et <span class="text-red font-bold">Temporaire</span>',
        isEnable: true,
      },
      {
        description: 'Droit de vote pour la prochaine <span class="text-red font-bold">Star</span> au musée',
        isEnable: true,
      },
    ],
    price: 80,
    isHighlighted : false,  
  },
  {
    title: 'FORMULE<br>Star',
    description: 'Solo !<br>Viens t\'amuser !',
    options : [
      {
        description: 'Entrée <span class="text-red font-bold">2 fois par mois</span>',
        isEnable: true,
      },
      {
        description: 'Valable pour <span class="text-red font-bold">1</span> personnes nominative',
        isEnable: true,
      },
      {
        description: 'Accès aux expos <span class="text-red font-bold">Permament</span> et <span class="text-red font-bold">Temporaire</span>',
        isEnable: true,
      },
      {
        description: 'Droit de vote pour la prochaine <span class="text-red font-bold">Star</span> au musée',
        isEnable: true,
      },
    ],
    price: 50,
    isHighlighted : true,
  },
  {
    title: 'FORMULE<br>Famille',
    description: 'Pour tous, en amis, en famille !<br>Vennez vous amuser !',
    options : [
      {
        description: 'Entrée <span class="text-red font-bold">Illimité</span>',
        isEnable: true,
      },
      {
        description: 'Valable pour <span class="text-red font-bold">4</span> personnes nominatives',
        isEnable: true,
      },
      {
        description: 'Accès aux expos <span class="text-red font-bold">Permament</span> et <span class="text-red font-bold">Temporaire</span>',
        isEnable: true,
      },
      {
        description: 'Droit de vote pour la prochaine <span class="text-red font-bold">Star</span> au musée',
        isEnable: false,
      },
    ],
    price: 150,
    isHighlighted : false,
  },
];

export default subscriptionTypes;
