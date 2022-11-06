/*
    This function takes a big object, "connection" and filters
    it based on the name of the filter and associated parameters: 
        equal to, not equal to, contains, does not contain
    Demo: https://jsfiddle.net/Ltvs7468

*/

let connection = [

    {

        "name": "7777",

        "id": "62ebf6c6e09b170858af6793",

        "description": "",

        "permissions": [

            {

                "name": "viewer",

                "id": "6204acc0d6967f32c8f4924e",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "625ed621addab93d40d5a3ba",

        "resource_title": "Order Flow Stats",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-08-04T16:41:42.181Z",

        "__typename": "Role"

    },

    {

        "name": "88888",

        "id": "62ebf73fe09b170858af6794",

        "description": "",

        "permissions": [

            {

                "name": "viewer",

                "id": "6204acc0d6967f32c8f4924e",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "625ed621addab93d40d5a3ba",

        "resource_title": "Order Flow Stats",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-08-04T16:43:43.695Z",

        "__typename": "Role"

    },

    {

        "name": "AddEquipmentAll",

        "id": "62054974d6967f32c8f4aa46",

        "description": "",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "60cecb7ae4c42c22782cc5fc",

        "resource_title": "Add Equipment",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-10-27T19:28:36.563Z",

        "__typename": "Role"

    },

    {

        "name": "AddEquipmentMultipleAll",

        "id": "62054974d6967f32c8f4aa50",

        "description": "testing updateRole",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "60cecb9ae4c42c22782cc67d",

        "resource_title": "Add Equipment Multiple",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-10-27T19:29:19.786Z",

        "__typename": "Role"

    },

    {

        "name": "AddEquipmentSingleAll",

        "id": "62054974d6967f32c8f4aa4b",

        "description": "",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "60cecb8be4c42c22782cc63c",

        "resource_title": "Add Equipment Single",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-10-27T19:28:18.844Z",

        "__typename": "Role"

    },

    {

        "name": "AddRuleAll",

        "id": "62054973d6967f32c8f4aa3c",

        "description": "",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "60cce4f3e4c42c22782c6e96",

        "resource_title": "Add Rule",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-10-27T19:29:37.870Z",

        "__typename": "Role"

    },

    {

        "name": "AddSingleLocationAdmin",

        "id": "62054975d6967f32c8f4aa5f",

        "description": "",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "60dba64f9ce48b53e00320a6",

        "resource_title": "Add Single Location",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-10-28T17:59:28.109Z",

        "__typename": "Role"

    },

    {

        "name": "AdministrationAll",

        "id": "6205496dd6967f32c8f4a9e2",

        "description": "",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "60a671e0b77580190893b857",

        "resource_title": "Administration",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-10-27T19:25:04.882Z",

        "__typename": "Role"

    },

    {

        "name": "AlertsAdministrator",

        "id": "624aea2f7f107455388b54b9",

        "description": "Administration on Alerts page for Atlanta site only",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": false,

        "resource_id": "61d842279aab28218cd1c5a3",

        "resource_title": "Alerts",

        "site_id": "5e2f27857487d02a208372db",

        "created_at": null,

        "updated_at": "2022-04-04T12:55:14.249Z",

        "__typename": "Role"

    },

    {

        "name": "AlertsAll",

        "id": "62054973d6967f32c8f4aa37",

        "description": "",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "60c13a8765bd9d2908355717",

        "resource_title": "Alerts",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-10-27T19:29:57.088Z",

        "__typename": "Role"

    },

    {

        "name": "all_Copy",

        "id": "6230ef13609a1928b4666101",

        "description": "default role for DSO-3346 navigation item",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "6230d555e303da08dc78aef3",

        "resource_title": "DSO-3346",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-03-15T19:54:59.203Z",

        "__typename": "Role"

    },

    {

        "name": "all_Copy2",

        "id": "6230f373609a1928b46672ee",

        "description": "default role for DSO-3346 navigation item",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "6230d555e303da08dc78aef3",

        "resource_title": "DSO-3346",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-03-15T20:13:39.754Z",

        "__typename": "Role"

    },

    {

        "name": "all_Copy3",

        "id": "6230f382609a1928b46672f7",

        "description": "default role for DSO-3346 navigation item",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "6230d555e303da08dc78aef3",

        "resource_title": "DSO-3346",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-03-15T20:13:54.764Z",

        "__typename": "Role"

    },

    {

        "name": "all_edited",

        "id": "6230d556609a1928b465b562",

        "description": "default role for DSO-3346 navigation item",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "6230d555e303da08dc78aef3",

        "resource_title": "DSO-3346",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-03-15T20:04:12.655Z",

        "__typename": "Role"

    },

    {

        "name": "all",

        "id": "62054976d6967f32c8f4aa73",

        "description": "",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "611d6bc9ef403133c8a5bcc5",

        "resource_title": null,

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-02-10T17:20:54.713Z",

        "__typename": "Role"

    },

    {

        "name": "all",

        "id": "6244aba3e093171604146d65",

        "description": "default role for Test navigation item",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "6244aba2ec2ecf6bfcea6507",

        "resource_title": "Test",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-03-30T19:12:35.133Z",

        "__typename": "Role"

    },

    {

        "name": "all",

        "id": "624b30b27f107455388ba087",

        "description": "default role for report navigation item",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "624b30b1269c4d1adc00f7ba",

        "resource_title": "report",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-04-04T17:53:54.317Z",

        "__typename": "Role"

    },

    {

        "name": "all",

        "id": "625720e61a4b2d17c4c90f07",

        "description": "default role for System Overview navigation item",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "625720e56fe3d32c7cff2779",

        "resource_title": "System Overview",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-04-13T19:13:42.423Z",

        "__typename": "Role"

    },

    {

        "name": "all",

        "id": "625722b41a4b2d17c4c91447",

        "description": "default role for System Overview navigation item",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "625722b36fe3d32c7cff2f2b",

        "resource_title": "System Overview",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-04-13T19:21:24.121Z",

        "__typename": "Role"

    },

    {

        "name": "all",

        "id": "625726821a4b2d17c4c91fda",

        "description": "default role for System Overview navigation item",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "625726826fe3d32c7cff3892",

        "resource_title": "System Overview",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-04-13T19:37:38.556Z",

        "__typename": "Role"

    },

    {

        "name": "all",

        "id": "625aef1e1a4b2d17c4cd784e",

        "description": "default role for System Overview Test navigation item",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "625aef1bd7ca69194c62cda1",

        "resource_title": "System Overview Test",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-04-16T16:30:22.084Z",

        "__typename": "Role"

    },

    {

        "name": "all",

        "id": "625aeffa1a4b2d17c4cd7b6f",

        "description": "default role for System Overview Test navigation item",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "625aeff9d7ca69194c62d014",

        "resource_title": "System Overview Test",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-04-16T16:34:02.078Z",

        "__typename": "Role"

    },

    {

        "name": "all",

        "id": "625ed3471a4b2d17c4cfcbad",

        "description": "default role for Order Flow Statistics navigation item",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "625ed33baddab93d40d59d88",

        "resource_title": "Order Flow Statistics",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-04-19T15:20:39.397Z",

        "__typename": "Role"

    },

    {

        "name": "all",

        "id": "625ed6221a4b2d17c4cfd623",

        "description": "default role for Order Flow Stats navigation item",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "625ed621addab93d40d5a3ba",

        "resource_title": "Order Flow Stats",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-04-19T15:32:50.129Z",

        "__typename": "Role"

    },

    {

        "name": "all",

        "id": "62b5f222d2f6bd1bc806ad4e",

        "description": "default role for TestNavigation navigation item",

        "permissions": [

            {

                "name": "admin",

                "id": "6204acc1d6967f32c8f49256",

                "__typename": "EmbeddedPermission"

            }

        ],

        "can_modify": true,

        "is_global": true,

        "resource_id": "62b5f221225d6912c49aa968",

        "resource_title": "TestNavigation",

        "site_id": "*",

        "created_at": null,

        "updated_at": "2022-06-24T17:19:30.622Z",

        "__typename": "Role"

    }

];

 

let newFilter = [

    {

        "multiCondition": "",

        "column": "name",

        "selectedColumn": {

            "value": "name",

            "label": "Permission Name",

            "type": "string"

        },

        "selectedOperator": {

            "label": "contains",

            "value": "contains",

            "type": "string"

        },

        "operator": "contains",

        "value": "All",

        "chip": "Permission Name contains 777"

    },
    {

        "multiCondition": "",

        "column": "name",

        "selectedColumn": {

            "value": "name",

            "label": "Permission Name",

            "type": "string"

        },

        "selectedOperator": {

            "label": "contains",

            "value": "contains",

            "type": "string"

        },

        "operator": "contains",

        "value": "all_",

        "chip": "Permission Name contains 777"

    }

];

 

let getFilteredItems = (arr, column, query, operation) => {
	let filteredItems = null;
  switch (operation) {
    case "contains":
     	filteredItems = arr.filter(item => item[column].includes(query))
      break;
    case "does not contain":
     	filteredItems =  arr.filter(item => !item[column].includes(query))
      break;
    case "is equal to" :
    	filteredItems =  arr.filter(item => item[column] == query)
      break;
    case "is not equal to" :
    	filteredItems =  arr.filter(item => item[column] !== query)
      break;
	}
  
  console.log(query);
  console.log(filteredItems.length);
  return filteredItems;
}


let filteredList = null;
let allVisibleFilters = [];
if (newFilter) {
    for(let i = 0; i < newFilter.length; i++) {
			filteredList = getFilteredItems(connection, newFilter[i].column, newFilter[i].value, newFilter[i].operator);
      allVisibleFilters.push(...filteredList);
      
    }
}

for(let i = 0; i < allVisibleFilters.length; i++) {
	console.log(allVisibleFilters[i].name);
}