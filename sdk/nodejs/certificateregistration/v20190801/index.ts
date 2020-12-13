// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

// Export members:
export * from "./appServiceCertificateOrder";
export * from "./appServiceCertificateOrderCertificate";
export * from "./getAppServiceCertificateOrder";
export * from "./getAppServiceCertificateOrderCertificate";

// Export enums:
export * from "../../types/enums/certificateregistration/v20190801";

// Import resources to register:
import { AppServiceCertificateOrder } from "./appServiceCertificateOrder";
import { AppServiceCertificateOrderCertificate } from "./appServiceCertificateOrderCertificate";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-nextgen:certificateregistration/v20190801:AppServiceCertificateOrder":
                return new AppServiceCertificateOrder(name, <any>undefined, { urn })
            case "azure-nextgen:certificateregistration/v20190801:AppServiceCertificateOrderCertificate":
                return new AppServiceCertificateOrderCertificate(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-nextgen", "certificateregistration/v20190801", _module)
