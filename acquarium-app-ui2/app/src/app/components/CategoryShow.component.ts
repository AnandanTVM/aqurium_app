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
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-CategoryShow',
  templateUrl: './CategoryShow.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class CategoryShowComponent {
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
      this.sd_6W9A7nfFovg5rJAn(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_6W9A7nfFovg5rJAn(bh) {
    try {
      bh = this.sd_NBjz3pBWhUV3ZsLB(bh);
      //appendnew_next_sd_6W9A7nfFovg5rJAn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6W9A7nfFovg5rJAn');
    }
  }

  routerFunction_1(link: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { link: link };
      bh.local = {};

      bh = this.linkInitializer_1_1(bh);
      //appendnew_next_routerFunction_1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EKo0tInZeCvZ2L1L');
    }
  }

  onPageChange_1(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};

      bh = this.variableManipulations_1(bh);
      //appendnew_next_onPageChange_1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HDrI70lcUp9Uu6WE');
    }
  }

  routerFunctionForProce_1(link: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { link: link };
      bh.local = {};

      bh = this.objectSeter_1(bh);
      //appendnew_next_routerFunctionForProce_1
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X0QQ4yEGGDiR5pVH');
    }
  }

  startTimer_1(time: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { time: time };
      bh.local = {};

      bh = this.increaseTime_1(bh);
      //appendnew_next_startTimer_1
      return bh.input.time;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FjpC5TmeKXIvw4A4');
    }
  }

  callfunction(id: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { id: id };
      bh.local = {};

      bh = this.sd_oXvWPfdcPRZavb7h(bh);
      //appendnew_next_callfunction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dzZIpsOGdrrvIHIn');
    }
  }

  //appendnew_flow_CategoryShowComponent_start

  sd_NBjz3pBWhUV3ZsLB(bh) {
    try {
      bh = this.sd_NspBDfiKthHkeFe5_1_1(bh);
      //appendnew_next_sd_NBjz3pBWhUV3ZsLB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NBjz3pBWhUV3ZsLB');
    }
  }

  sd_NspBDfiKthHkeFe5_1_1(bh) {
    try {
      this.page.types = this.page.types;
      this.page.currentItemsToShow = [];
      this.page.pageSize = 2;
      this.page.name = undefined;
      this.page.img = undefined;
      this.page.time = undefined;
      this.page.desc = undefined;
      this.page.link = undefined;
      this.page.childColor = this.page.childColor;
      this.page.recipe = this.page.recipe;
      this.page.loader = 0;
      this.page.countList = this.page.countList;

      bh = this.sd_YR6NYTfleav1RTjd_1(bh);
      //appendnew_next_sd_NspBDfiKthHkeFe5_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_12Vda0EmB5XqK6ZK');
    }
  }

  async sd_YR6NYTfleav1RTjd_1(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/getrecipetypes',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.types = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_op6TX5PQiApjZMOO_1_1(bh);
      //appendnew_next_sd_YR6NYTfleav1RTjd_1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mTT8oeZeElIlQ0Ni');
    }
  }

  sd_op6TX5PQiApjZMOO_1_1(bh) {
    try {
      const page = this.page;
      let path = JSON.parse(window.localStorage.getItem('analyzedPath'));
      window.localStorage.removeItem('analyzedPath');
      page.loader = 1;

      page.types.sort((a, b) => b.score - a.score);

      bh.input.link =
        window.location.search.split('=')[1] || page.types[0].link;

      bh = this.sd_1VpBa709o3QfWR3h_1_1(bh);
      //appendnew_next_sd_op6TX5PQiApjZMOO_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u2KT1Fc8Ncg75wrz');
    }
  }

  sd_1VpBa709o3QfWR3h_1_1(bh) {
    try {
      if (
        this.sdService.operators['nnull'](
          bh.input.link,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.qPfetcher_1_1(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uaQqYQRCaAEDLTwO');
    }
  }

  qPfetcher_1_1(bh) {
    try {
      const page = this.page;
      bh.input.name = bh.input.link;
      bh.input.limit = 2;
      bh.input.skip = 0;

      bh.url = `http://localhost:8081/api/counttypes/${bh.input.name}`;

      bh = this.sd_mZzfUPyap6xofiP2_1(bh);
      //appendnew_next_qPfetcher_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jNFRMKx8k3Noe5yS');
    }
  }

  async sd_mZzfUPyap6xofiP2_1(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.itemsLength = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_455XS30FzJKH5YNX_1(bh);
      //appendnew_next_sd_mZzfUPyap6xofiP2_1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wOATQviHN6V9F3wi');
    }
  }

  async sd_455XS30FzJKH5YNX_1(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/countall',
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.countList = await this.sdService.nHttpRequest(requestOptions);

      bh = this.sd_A7RxsBJoZer9SeRj_1(bh);
      //appendnew_next_sd_455XS30FzJKH5YNX_1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1ROhrIGlasBPFs0S');
    }
  }

  sd_A7RxsBJoZer9SeRj_1(bh) {
    try {
      const page = this.page;
      bh.input.url = `http://localhost:8081/api/getalltypes/${bh.input.name}/${bh.input.limit}/${bh.input.skip}`;

      bh.local.countMessage = '4 More Result';

      bh = this.sd_JAJslYy1GElaaZIP_1(bh);
      //appendnew_next_sd_A7RxsBJoZer9SeRj_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qf1Xh1O68rwkuHns');
    }
  }

  async sd_JAJslYy1GElaaZIP_1(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.recipetypes = await this.sdService.nHttpRequest(requestOptions);

      bh = this.variableInitialization_1_1(bh);
      //appendnew_next_sd_JAJslYy1GElaaZIP_1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dgLvtx6q6doJvQr9');
    }
  }

  variableInitialization_1_1(bh) {
    try {
      const page = this.page;
      page.loader = page.recipetypes.loader;
      page.recipetypes = page.recipetypes.result;
      page.currentRecipeItemsToShow = page.recipetypes.slice(0, 2);
      page.itemsLength = page.itemsLength.count;

      const result = page.types.map((item) => {
        const matchingItem = page.countList.find(
          (x) => x._id === item.name.toLowerCase()
        );
        return {
          img: item.img,
          link: item.link,
          name: item.name,
          count: matchingItem ? matchingItem.count : null,
        };
      });
      page.types = result;

      bh = this.sd_nYVHwRby2DJZvVow(bh);
      //appendnew_next_variableInitialization_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UIRTZDAi4R5CqdnJ');
    }
  }

  sd_nYVHwRby2DJZvVow(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.local.countMessage, '', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });

      //appendnew_next_sd_nYVHwRby2DJZvVow
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nYVHwRby2DJZvVow');
    }
  }

  linkInitializer_1_1(bh) {
    try {
      const page = this.page;
      bh.local.qp = {
        recipetype: bh.input.link,
      };
      page.loader = 1;
      const url = new URL(window.location.href);
      url.searchParams.set('recipeType', `${bh.input.link}`);
      window.history.pushState(null, '', url.toString());

      bh = this.qPfetcher_1_1(bh);
      //appendnew_next_linkInitializer_1_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2U6oSLCFNgV8Jp1F');
    }
  }

  variableManipulations_1(bh) {
    try {
      const page = this.page;
      bh.input.event.skip = bh.input.event.pageIndex * bh.input.event.pageSize;
      bh.input.name =
        window.location.search.split('=')[1] || bh.input.name || 'cars';

      bh.input.url = `http://localhost:8081/api/getalltypes/${bh.input.name}/${bh.input.limit}/${bh.input.skip}`;

      bh = this.sd_M9XxWkg0LhcbUNyN_1(bh);
      //appendnew_next_variableManipulations_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qciwUj1hTztX6k8V');
    }
  }

  async sd_M9XxWkg0LhcbUNyN_1(bh) {
    try {
      let requestOptions = {
        url: bh.input.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.recipetypes = await this.sdService.nHttpRequest(requestOptions);

      bh = this.variableSetter_1(bh);
      //appendnew_next_sd_M9XxWkg0LhcbUNyN_1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SJvCWcxDc6MQ5pxJ');
    }
  }

  variableSetter_1(bh) {
    try {
      const page = this.page;
      page.currentRecipeItemsToShow = page.recipetypes.result;

      //appendnew_next_variableSetter_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HNRo66X9sYDNaloi');
    }
  }

  objectSeter_1(bh) {
    try {
      const page = this.page;
      bh.input.qp = {
        recipetype: window.location.search.substring(1).split('=')[1],
        process: bh.input.link,
      };

      bh = this.navigateToProcedure_1(bh);
      //appendnew_next_objectSeter_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hAgvj7713GCApTfF');
    }
  }

  async navigateToProcedure_1(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/process');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, bh.input.qp),
        });

      //appendnew_next_navigateToProcedure_1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tVDphCmrTRLOBOrv');
    }
  }

  increaseTime_1(bh) {
    try {
      const page = this.page;
      function increaseTime() {
        if (page.currTime < page.procedures[page.step].time) {
          if (page.currTime >= page.procedures[page.step].time - 10) {
            page.emotiveMessage = page.procedures[page.step].SecMsg10;
          }
          if (page.currTime >= page.procedures[page.step].time - 5) {
            page.emotiveMessage = page.procedures[page.step].SecMsg5;
          }
          if (page.currTime >= page.procedures[page.step].time - 2) {
            page.emotiveMessage = page.procedures[page.step].SecMsg3;
          }
          page.currTime += 1;
        } else {
          playSound(
            'https://drive.google.com/uc?id=1BpHWgw7RvB-E2wYZVN61nETDNWD_y4RN&export=download'
          );
        }
      }

      function playSound(url) {
        const audio = new Audio(url);
        audio.play();
      }

      let interValId;
      if (!interValId) {
        interValId = setInterval(increaseTime, 1000);
      } else {
        clearInterval(interValId);
      }

      //appendnew_next_increaseTime_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2ddd62Bd9p7kXEUM');
    }
  }

  sd_oXvWPfdcPRZavb7h(bh) {
    try {
      const page = this.page;
      page.currentRecipeItemsToShow = page.currentRecipeItemsToShow.map(
        (obj) => {
          if (obj._id === bh.input.id) {
            obj.liked = obj.liked === true ? false : true;
            if (obj.liked) {
              obj.score++;
            } else {
              obj.score--;
            }
          }
          return obj;
        }
      );

      //appendnew_next_sd_oXvWPfdcPRZavb7h
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oXvWPfdcPRZavb7h');
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
  //appendnew_flow_CategoryShowComponent_Catch
}
