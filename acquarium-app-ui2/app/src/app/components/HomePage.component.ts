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
  selector: 'bh-HomePage',
  templateUrl: './HomePage.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class HomePageComponent {
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
      this.sd_6hD6zoY0nIOC8m16(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_6hD6zoY0nIOC8m16(bh) {
    try {
      bh = this.sd_5TVoM8N3MrtiyFxT(bh);
      //appendnew_next_sd_6hD6zoY0nIOC8m16
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6hD6zoY0nIOC8m16');
    }
  }

  toggleSideNav_1(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};

      bh = this.sd_zty9hRSXuzreJmT9_1_1_1(bh);
      //appendnew_next_toggleSideNav_1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qa1XEpBGi93SOt6q');
    }
  }

  //appendnew_flow_HomePageComponent_start

  sd_5TVoM8N3MrtiyFxT(bh) {
    try {
      bh = this.sd_sODADBXkkfU59Dq1_1_1_1(bh);
      //appendnew_next_sd_5TVoM8N3MrtiyFxT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5TVoM8N3MrtiyFxT');
    }
  }

  sd_sODADBXkkfU59Dq1_1_1_1(bh) {
    try {
      this.page.open = 0;
      this.page.navData = [];

      bh = this.sd_ubvN4t44bgqYvYrT_1_1_1(bh);
      //appendnew_next_sd_sODADBXkkfU59Dq1_1_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m4iYliylH2FsjxOo');
    }
  }

  sd_ubvN4t44bgqYvYrT_1_1_1(bh) {
    try {
      const page = this.page;
      bh.input.payload = {
        filter: {},
        orderBy: {},
        pageSize: 0,
        offSet: 0,
      };

      bh.input.url = 'http://localhost:8091/api/test';

      bh = this.sd_9RJnvXf7stzSFtRm_1_1(bh);
      //appendnew_next_sd_ubvN4t44bgqYvYrT_1_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9IyEPT7e4wueA8l9');
    }
  }

  async sd_9RJnvXf7stzSFtRm_1_1(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.payload,
      };
      bh.input.response = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_n7qG8cvbvjyJ0TW2_1(bh);
      //appendnew_next_sd_9RJnvXf7stzSFtRm_1_1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YLAmjTjMgfDL6CFU');
    }
  }

  sd_n7qG8cvbvjyJ0TW2_1(bh) {
    try {
      const page = this.page;
      page.navData = bh.input.response.payload;

      //appendnew_next_sd_n7qG8cvbvjyJ0TW2_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c121DMfnRhfk1WZW');
    }
  }

  sd_zty9hRSXuzreJmT9_1_1_1(bh) {
    try {
      const page = this.page;
      page.open ? (page.open = 0) : (page.open = 1);

      //appendnew_next_sd_zty9hRSXuzreJmT9_1_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9iStqc3VR5mxTnSb');
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
  //appendnew_flow_HomePageComponent_Catch
}
