<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon :actions=actions></page-title>

          <b-card title="" class="main-card mb-4">
            <b-table :striped=true
                     :bordered=true
                     :outlined=false
                     :small=true
                     :hover=true
                     :dark=false
                     :fixed=false
                     :foot-clone=false
                     :items="teams"
                     :fields="fields">

                <template #cell(actions)="row">
                  <b-button size="sm" @click="enableTeam(row.item, row.index, $event.target)" variant="outline-primary">
                    {{ row.item.isactive == "Y" ? 'Disable' : 'Enable' }} Team
                  </b-button>
                </template>

            </b-table>
        </b-card>
          

        <div class="row">
            <div class="col-md-12">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Add Team </h5>                    
                            <div class="position-relative form-group">
                              <ValidationProvider v-slot="v" rules="required">
                                    <label for="examplePassword" class="">Name</label>
                                    <input name="agent_name" id="examplePassword"
                                     placeholder="Online Team" type="text"
                                      class="form-control" v-model="newTeam.dept_name">
                                      <span class="v-input-error">{{ v.errors[0] }}</span>
                              </ValidationProvider>
                              </div>

                            <div class="position-relative form-group">
                              <ValidationProvider v-slot="v" rules="required|email">
                                <label for="exampleEmail" class="">Email</label>
                                <input name="email"
                                        id="exampleEmail"
                                        placeholder="abc@xyz.com"
                                        type="email"
                                        class="form-control" v-model="newTeam.dept_email">
                                        <span class="v-input-error">{{ v.errors[0] }}</span>
                              </ValidationProvider>
                            </div>
                            <div class="position-relative form-group">
                                <label for="exampleEmail" class="">Code</label>
                                <div class="input-group">
                                    <div class="input-group-prepend"><span class="input-group-text">@</span></div>
                                    <input placeholder="ONLINE,BILLING" type="text" class="form-control" v-model="newTeam.dept_code">
                                </div>
                            </div>
 

                            <div class="position-relative form-group">
                              <button @click="createTeam"
                                name="password" id="examplePassword"
                                class="form-control btn btn-primary">Create</button>
                              </div>
                           
                    </div>
                </div>
            </div>

        </div>



    </div>
</template>

<script>

    import PageTitle from "../Layout/PageTitleAction.vue";

    function newTeam() {
      return {
              "dept_code": "",
              "dept_email": "",
              "dept_id" : 0,
              "dept_name": ""
            };
    }
    export default {
        components: {
            PageTitle,
        },
        data: () => ({
            heading: 'Teams',
            subheading: 'Once created, can be used to assign to Agent',
            icon: 'pe-7s-network icon-gradient bg-tempting-azure',
            actions : [],
            fields: [ { key : 'dept_name', label : "Name" }, { key : 'dept_code', label : "Code" }, 
              { key : 'dept_email', label : "Email" },
              { key: 'actions', label: 'Actions' }],
            newTeam : newTeam()
        }),
        computed : {
            teams : function (argument) {
              return this.$store.getters.StateTeams
            } 
        },
        created : function (argument) {
          this.loadAgentTeams();
        },
        methods : {
          async loadAgentTeams (){
            await this.$store.dispatch('GetTeams');
          },
          async createTeam () {
            await this.$store.dispatch('CreatTeam', this.newTeam);
            this.newTeam = newTeam();
          },
          async enableTeam(item) {
             item.isactive = item.isactive == "Y" ? "N" : "Y";
             await this.$store.dispatch('CreatTeam', item);
          }
        }


    }
</script>
