// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getUser(args: GetUserArgs, opts?: pulumi.InvokeOptions): Promise<GetUserResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:apimanagement/v20190101:getUser", {
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "userId": args.userId,
    }, opts);
}

export interface GetUserArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
    /**
     * User identifier. Must be unique in the current API Management service instance.
     */
    readonly userId: string;
}

/**
 * User details.
 */
export interface GetUserResult {
    /**
     * Email address.
     */
    readonly email?: string;
    /**
     * First name.
     */
    readonly firstName?: string;
    /**
     * Collection of groups user is part of.
     */
    readonly groups: outputs.apimanagement.v20190101.GroupContractPropertiesResponse[];
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Collection of user identities.
     */
    readonly identities?: outputs.apimanagement.v20190101.UserIdentityContractResponse[];
    /**
     * Last name.
     */
    readonly lastName?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Optional note about a user set by the administrator.
     */
    readonly note?: string;
    /**
     * Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    readonly registrationDate?: string;
    /**
     * Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
     */
    readonly state?: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
