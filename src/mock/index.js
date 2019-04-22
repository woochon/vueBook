const Mock = require('mockjs');
const Random = Mock.Random;
const data = Mock.mock({
        'list|1-10':[{
          'id|+1':1,
          'image':Random.image('200*100','red','write','png','image')
          /*'url':'http://xxxx/xxx.cloudden.com/@name'*/
        }],
        'name|1-3':'ab',
        'string|2':'woochon',
        'number|+1':202,
        'random|1-100':100,
        'boolean1|1':true,
        'boolean2|1-2':true,
      });
Mock.mock('/news/api', 'post', data)
