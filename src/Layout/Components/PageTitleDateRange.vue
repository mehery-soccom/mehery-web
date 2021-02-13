<template>
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i :class="icon"/>
                </div>
                <div>
                    {{heading}}
                    <div
                        class="page-title-subheading">
                        {{subheading}}
                    </div>
                </div>
            </div>
            <div class="page-title-actions">
               <date-range-picker v-model="dateRange"
                    :opens="'left'"
                    :time-picker="false"
                    :ranges="ranges"
                    @select="onSelect"
                    @update="onUpdate"
               >
                <!--    input slot (new slot syntax)-->
                <template #input="picker" style="min-width: 350px;">
                  {{ picker.startDate | date }} - {{ picker.endDate | date }}
                </template>
              </date-range-picker>
            </div>
        </div>
    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faStar,
        faPlus
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    import DateRangePicker from 'vue2-daterange-picker'
    import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
    import VueMoment from 'vue-moment'
    import moment from 'moment'

    library.add(
        faStar,
        faPlus,
    );

    function hour0(mmt){
        return mmt.hour(0).minute(0).seconds(0).milliseconds(0);
    }
    function hour24(mmt){
        return mmt.hour(23).minute(59).seconds(59).milliseconds(999);
    }

    export default {
        name: "PageTitleDateRange",
        components: {
            'font-awesome-icon': FontAwesomeIcon,
            DateRangePicker,
        },
        data () {
          return {
            dateRange: {startDate : hour0(moment()).toDate(), endDate : hour24(moment()).toDate()},
            ranges : {
                'Today': [ hour0(moment()).toDate(), hour24(moment()).toDate()],

                'Yesterday': [hour0(moment().subtract(1,"day")).toDate(),
                                 hour24(moment().subtract(1,"day")).toDate()],

                'This month': [hour0(moment().date(1)).toDate(), 
                                    hour24(moment()).toDate()],
                'Last month': [hour0(moment().subtract(1,"month").date(1)).toDate(), 
                                   hour24(moment().date(0)).toDate()],
                'This year': [hour0(moment().month(0).date(1)).toDate(), 
                                    hour24(moment()).toDate()],
                'Last year': [hour0(moment().subtract(1,"year").month(0).date(1)).toDate(), 
                                    hour24(moment().month(0).date(0)).toDate()],
            },
            onSelect : function (r) {
                console.log("select",r);
            },
            onUpdate : function (r) {
                console.log("update",r);
            }
          }
        },
        filters: {
          date(val) {
            return val ? val.toLocaleString() : ''
          }
        },
        props: {
            icon: String,
            heading: String,
            subheading: String,
        }
    }
</script>

<style >
  .slot {
    background-color: #aaa;
    padding: 0.5rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .text-black {
    color: #000;
  }
  .vue-daterange-picker .form-control.reportrange-text{
    background: #6bab8d;
    color: #FFF;
    font-size: inherit;
    font-weight: bold;
  }
</style>