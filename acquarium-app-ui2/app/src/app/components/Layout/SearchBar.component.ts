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
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-SearchBar',
  templateUrl: './SearchBar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class SearchBarComponent {
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
      this.sd_pN2ozN0SaXkAHe47(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_pN2ozN0SaXkAHe47(bh) {
    try {
      bh = this.sd_kXAYBYlIghIjyDrJ(bh);
      //appendnew_next_sd_pN2ozN0SaXkAHe47
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pN2ozN0SaXkAHe47');
    }
  }

  onSearch_1(data: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { data: data };
      bh.local = {};

      bh = this.sd_bXXo9qpiMM6gHINk_2_1_1_1(bh);
      //appendnew_next_onSearch_1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AOyZzJQ1itxGGj0h');
    }
  }

  routerFunction_1(
    link: any = undefined,
    category: any = undefined,
    ...others
  ) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { link: link, category: category };
      bh.local = {};

      bh = this.objectSeter_2_1_1_1(bh);
      //appendnew_next_routerFunction_1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b650DGruhjGDtW2k');
    }
  }

  onEnter_1(searchString: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { searchString: searchString };
      bh.local = {};

      bh = this.setSearch_1_1_1(bh);
      //appendnew_next_onEnter_1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RTxCaTVkgNWT6q78');
    }
  }

  //appendnew_flow_SearchBarComponent_start

  sd_kXAYBYlIghIjyDrJ(bh) {
    try {
      bh = this.sd_jGZ3hntASuM7DV9b_2_1_1_1(bh);
      //appendnew_next_sd_kXAYBYlIghIjyDrJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kXAYBYlIghIjyDrJ');
    }
  }

  sd_jGZ3hntASuM7DV9b_2_1_1_1(bh) {
    try {
      this.page.search = this.page.search;
      this.page.types = this.page.types;
      this.page.visible = 0;

      bh = this.sd_SdAYOpnOuQVvWIVB_2_1_1_1(bh);
      //appendnew_next_sd_jGZ3hntASuM7DV9b_2_1_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vVppp4fozRWRnB1S');
    }
  }

  sd_SdAYOpnOuQVvWIVB_2_1_1_1(bh) {
    try {
      const page = this.page;
      page.visible = window.location.href.includes('/home/recipetypes') ? 1 : 0;

      //appendnew_next_sd_SdAYOpnOuQVvWIVB_2_1_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Cr8p3i3YGqggczxX');
    }
  }

  sd_bXXo9qpiMM6gHINk_2_1_1_1(bh) {
    try {
      const page = this.page;
      if (bh.input.data) {
        bh.input.val = 1;
      } else {
        bh.input.val = 0;
      }

      bh = this.sd_ICLESTiRnBitF2Z5_2_1_1_1(bh);
      //appendnew_next_sd_bXXo9qpiMM6gHINk_2_1_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hnitqwfZ8lgZm7dM');
    }
  }

  sd_ICLESTiRnBitF2Z5_2_1_1_1(bh) {
    try {
      if (
        this.sdService.operators['se'](bh.input.val, 1, undefined, undefined)
      ) {
        bh = this.sd_6XqlsJ1sxpxHhIkr_1_1_1(bh);
      } else if (
        this.sdService.operators['se'](bh.input.val, 0, undefined, undefined)
      ) {
        bh = this.sd_7cY1CO0jhTfwSClX_2_1_1_1(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YpaDdZLxgPhWB9iq');
    }
  }

  sd_6XqlsJ1sxpxHhIkr_1_1_1(bh) {
    try {
      const page = this.page;
      bh.url = `http://localhost:8081/api/searchrecipes/${bh.input.data}`;

      bh = this.sd_kyZ3ohppVd47VV0P_1_1_1(bh);
      //appendnew_next_sd_6XqlsJ1sxpxHhIkr_1_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9Ha0XkGis54lcZmm');
    }
  }

  async sd_kyZ3ohppVd47VV0P_1_1_1(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.types = await this.sdService.nHttpRequest(requestOptions);

      //appendnew_next_sd_kyZ3ohppVd47VV0P_1_1_1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zUz9WLoIkrYr0V2r');
    }
  }

  sd_7cY1CO0jhTfwSClX_2_1_1_1(bh) {
    try {
      const page = this.page;
      page.types = [];

      //appendnew_next_sd_7cY1CO0jhTfwSClX_2_1_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l0YskhfDTqLU1F6x');
    }
  }

  objectSeter_2_1_1_1(bh) {
    try {
      const page = this.page;
      bh.input.qp = {
        recipetype: bh.input.category,
        process: bh.input.link,
      };

      console.log(bh.input.category, bh.input.link);

      bh = this.navigateToProcedure_2_1_1_1(bh);
      //appendnew_next_objectSeter_2_1_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_i4QbLETohALH28eZ');
    }
  }

  async navigateToProcedure_2_1_1_1(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/process');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, bh.input.qp),
        });

      bh = this.sd_S2unUao0DDy8okvV_2_1_1_1(bh);
      //appendnew_next_navigateToProcedure_2_1_1_1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_O9RJM2IP34fdJUYk');
    }
  }

  sd_S2unUao0DDy8okvV_2_1_1_1(bh) {
    try {
      const page = this.page; // window.location.reload();

      //appendnew_next_sd_S2unUao0DDy8okvV_2_1_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m9AjpuQd3Xrf5O6N');
    }
  }

  setSearch_1_1_1(bh) {
    try {
      localStorage.setItem('search', JSON.stringify(bh.input.searchString));

      bh = this.sd_jRZyqUFdRHTRPaKg_1_1_1(bh);
      //appendnew_next_setSearch_1_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FT55KJQ9fqILixou');
    }
  }

  sd_jRZyqUFdRHTRPaKg_1_1_1(bh) {
    try {
      this.page.recents = JSON.parse(localStorage.getItem('recents'));

      bh = this.sd_j1xJtFSfJsylgKka_1_1_1(bh);
      //appendnew_next_sd_jRZyqUFdRHTRPaKg_1_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EDZDDSjsLqHL0oQZ');
    }
  }

  sd_j1xJtFSfJsylgKka_1_1_1(bh) {
    try {
      const page = this.page;
      let newObj = {
        name: bh.input.searchString,
      };

      if (!page.recents) {
        page.recents = [];
      }
      let checker =
        page.recents &&
        page.recents.some((obj) => obj.name == bh.input.searchString);

      if (!checker) {
        page.recents.push(newObj);
      }
      page.localPresent = 1;

      bh = this.fetchUpdated_1_1_1(bh);
      //appendnew_next_sd_j1xJtFSfJsylgKka_1_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XrDaO2sd8hUFZzzN');
    }
  }

  fetchUpdated_1_1_1(bh) {
    try {
      localStorage.setItem('recents', JSON.stringify(this.page.recents));

      //appendnew_next_fetchUpdated_1_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_25ST1HfJPDl83Jfe');
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
  //appendnew_flow_SearchBarComponent_Catch
}
