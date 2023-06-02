/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Notifier',
  templateUrl: './Notifier.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class NotifierComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_EJdHe5xpL9LV9TCM(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_EJdHe5xpL9LV9TCM(bh) {
    try {
      bh = this.sd_aEWflIdGFmxfEzpG(bh);
      //appendnew_next_sd_EJdHe5xpL9LV9TCM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EJdHe5xpL9LV9TCM');
    }
  }

  //appendnew_flow_NotifierComponent_start

  sd_aEWflIdGFmxfEzpG(bh) {
    try {
      bh = this.sd_0nQn44xOpUlnSz1H_1_1_1(bh);
      //appendnew_next_sd_aEWflIdGFmxfEzpG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aEWflIdGFmxfEzpG');
    }
  }

  sd_0nQn44xOpUlnSz1H_1_1_1(bh) {
    try {
      this.page.notifierResult = [];

      bh = this.sd_ek3C3GJjZ3aKWcuu_1_1(bh);
      //appendnew_next_sd_0nQn44xOpUlnSz1H_1_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WJKpLUKh1f4CRycL');
    }
  }

  sd_ek3C3GJjZ3aKWcuu_1_1(bh) {
    try {
      const page = this.page;
      bh.input.body = {
        filter: {},
        orderBy: {},
        pageSize: 0,
        offSet: 0,
      };

      bh = this.sd_ovsvh0homN45NeYI_1_1(bh);
      //appendnew_next_sd_ek3C3GJjZ3aKWcuu_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f4YRlElYWbjNR7KU');
    }
  }

  async sd_ovsvh0homN45NeYI_1_1(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/getnotifierdata',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.body,
      };
      this.page.notifierResult = await this.sdService.nHttpRequest(
        requestOptions
      );

      bh = this.sd_IY1igMV6kqYdK4cA_1_1_1(bh);
      //appendnew_next_sd_ovsvh0homN45NeYI_1_1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_i70Q97PV0nHq391E');
    }
  }

  sd_IY1igMV6kqYdK4cA_1_1_1(bh) {
    try {
      const page = this.page;
      let toggle = 0;
      page.engagementData = ' persons are looking for ';
      page.value = `${page.notifierResult[toggle].count}`;
      page.valueData = `${page.notifierResult[toggle].recipename}`;

      function toggleData() {
        if (toggle === page.notifierResult.length) {
          toggle = 0;
        }
        page.value = `${page.notifierResult[toggle].count}`;
        page.valueData = `${page.notifierResult[toggle].recipename}`;
        return;
      }

      setInterval(() => {
        toggleData();
        toggle++;
      }, 3000);

      // -> //

      //appendnew_next_sd_IY1igMV6kqYdK4cA_1_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_re2Fw5wACmsbsKnH');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_NotifierComponent_Catch
}
