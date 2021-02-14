import { Chef, Restaurant } from './../../db/models';

const resolvers = {
  restuarants: (chef: Chef) => {
    return Restaurant.findAll({
      include: [
        {
          model: Chef,
          where: {
            id: chef.id,
          },
        },
      ],
      order: [['name', 'ASC']],
    });
  },
};

export default resolvers;
