<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon :actions=actions></page-title>
        <div class="row">
            <div class="col-md-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Agent Details</h5>
                        <form class="">
                    
                            <div class="position-relative form-group">
                                    <label for="examplePassword" class="">Name</label>
                                    <input name="agent_name" id="examplePassword"
                                     placeholder="John Doe" type="text"
                                      class="form-control">
                              </div>

                            <div class="position-relative form-group">
                                <label for="exampleEmail" class="">Email</label>
                                <input name="email"
                                        id="exampleEmail"
                                        placeholder="abc@xyz.com"
                                        type="email"
                                        class="form-control">
                            </div>
                            <div class="position-relative form-group">
                                <label for="exampleEmail" class="">Agent Code</label>
                                <div class="input-group">
                                    <div class="input-group-prepend"><span class="input-group-text">@</span></div>
                                    <input placeholder="john,sam2" type="text" class="form-control">
                                </div>
                            </div>
 

                            <div class="position-relative form-group"><label for="examplePassword"
                                                                             class="">Password</label><input
                                name="password" id="examplePassword" placeholder="password placeholder" type="password"
                                class="form-control"></div>
                           
                        </form>
                    </div>
                </div>
            </div>


            <div class="col-md-6">
                  <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Dashboard options</h5>
                            <div class="row">
                                <div class="col-md-6">
                                      
                                    <div class="position-relative form-group"><label for="exampleSelect" class="">Department</label>
                                      <select name="select" id="exampleSelect" class="form-control">
                                          <option>Sales</option>
                                          <option>Marketing</option>
                                          <option>Finance</option>
                                          <option>Online</option>
                                          <option>Admin</option>
                                        </select>
                                    </div>

                                    <div class="position-relative form-group">
                                        <label for="exampleCustomMutlipleSelect" class="">Channels</label>
                                        <select multiple="" type="select" id="exampleCustomMutlipleSelect"
                                                 name="customSelect" class="custom-select">
                                                <option>WhatsApp</option>
                                                <option>Facebook</option>
                                                <option>Twitter</option>
                                                <option>Telegram</option>
                                                <option>Website</option>
                                          </select>
                                    </div>

                                 </div>


                                <div class="col-md-6" hidden>
                                    <div class="position-relative form-group"><label for="exampleCustomSelectDisabled"
                                                                                     class="">Custom Select
                                        Disabled</label><select type="select" id="exampleCustomSelectDisabled"
                                                                name="customSelect" disabled
                                                                class="custom-select">
                                        <option value="">Select</option>
                                        <option>Value 1</option>
                                        <option>Value 2</option>
                                        <option>Value 3</option>
                                        <option>Value 4</option>
                                        <option>Value 5</option>
                                    </select></div>
                                    <div class="position-relative form-group"><label
                                        for="exampleCustomMutlipleSelectDisabled" class="">Custom Multiple Select
                                        Disabled</label><select multiple="" type="select"
                                                                id="exampleCustomMutlipleSelectDisabled"
                                                                name="customSelect" disabled class="custom-select">
                                        <option value="">Select</option>
                                        <option>Value 1</option>
                                        <option>Value 2</option>
                                        <option>Value 3</option>
                                        <option>Value 4</option>
                                        <option>Value 5</option>
                                    </select></div>
                                </div>


                            </div>
                        </div>
                    </div>

                      <div class="main-card mb-3 card">
                          <div class="card-body row">
                            <h5 class="card-title"></h5>
                              <div class="position-relative form-group col-md-6">
                                  <div>
                                      <div class="custom-checkbox custom-control"><input type="checkbox"
                                                                                         id="exampleCustomCheckbox"
                                                                                         class="custom-control-input"><label
                                          class="custom-control-label" for="exampleCustomCheckbox">Active</label>
                                      </div>
                                      <div class="custom-checkbox custom-control"><input type="checkbox"
                                                                                         id="exampleCustomCheckbox2"
                                                                                         class="custom-control-input"><label
                                          class="custom-control-label" for="exampleCustomCheckbox2">Send Email</label>
                                      </div>
                                         
                                  </div>
                              </div>
                               <div class="col-md-6">
                                  <button class="mt-1 btn btn-primary float-right">Submit</button>
                                </div>
                          </div>
  
                      </div>


            </div>





        </div>
                <form class="">
                    <div class="row">
                        <div class="col-md-6">

                        </div>

                    </div>
                </form>
        <div>
          
        </div>
    </div>
</template>

<script>

    import PageTitle from "../../Layout/Components/PageTitleAction.vue";

    export default {
        components: {
            PageTitle,
        },
        data: () => ({
            heading: 'Add Agent',
            subheading: 'Enter Details for new Agent, once created agent will recieve email to reset password',
            icon: 'pe-7s-add-user icon-gradient bg-premium-dark',
            actions : []
        }),


    }
</script>
