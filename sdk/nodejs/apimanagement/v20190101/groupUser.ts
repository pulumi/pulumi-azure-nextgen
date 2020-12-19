// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * User details.
 */
export class GroupUser extends pulumi.CustomResource {
    /**
     * Get an existing GroupUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): GroupUser {
        return new GroupUser(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:apimanagement/v20190101:GroupUser';

    /**
     * Returns true if the given object is an instance of GroupUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GroupUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GroupUser.__pulumiType;
    }

    /**
     * Email address.
     */
    public /*out*/ readonly email!: pulumi.Output<string | undefined>;
    /**
     * First name.
     */
    public /*out*/ readonly firstName!: pulumi.Output<string | undefined>;
    /**
     * Collection of groups user is part of.
     */
    public /*out*/ readonly groups!: pulumi.Output<outputs.apimanagement.v20190101.GroupContractPropertiesResponse[]>;
    /**
     * Collection of user identities.
     */
    public /*out*/ readonly identities!: pulumi.Output<outputs.apimanagement.v20190101.UserIdentityContractResponse[] | undefined>;
    /**
     * Last name.
     */
    public /*out*/ readonly lastName!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Optional note about a user set by the administrator.
     */
    public /*out*/ readonly note!: pulumi.Output<string | undefined>;
    /**
     * Date of user registration. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    public /*out*/ readonly registrationDate!: pulumi.Output<string | undefined>;
    /**
     * Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active.
     */
    public /*out*/ readonly state!: pulumi.Output<string | undefined>;
    /**
     * Resource type for API Management resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a GroupUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupUserArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.groupId === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'groupId'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.userId === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'userId'");
            }
            inputs["groupId"] = args ? args.groupId : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serviceName"] = args ? args.serviceName : undefined;
            inputs["userId"] = args ? args.userId : undefined;
            inputs["email"] = undefined /*out*/;
            inputs["firstName"] = undefined /*out*/;
            inputs["groups"] = undefined /*out*/;
            inputs["identities"] = undefined /*out*/;
            inputs["lastName"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["note"] = undefined /*out*/;
            inputs["registrationDate"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["email"] = undefined /*out*/;
            inputs["firstName"] = undefined /*out*/;
            inputs["groups"] = undefined /*out*/;
            inputs["identities"] = undefined /*out*/;
            inputs["lastName"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["note"] = undefined /*out*/;
            inputs["registrationDate"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:apimanagement/latest:GroupUser" }, { type: "azure-nextgen:apimanagement/v20170301:GroupUser" }, { type: "azure-nextgen:apimanagement/v20180101:GroupUser" }, { type: "azure-nextgen:apimanagement/v20180601preview:GroupUser" }, { type: "azure-nextgen:apimanagement/v20191201:GroupUser" }, { type: "azure-nextgen:apimanagement/v20191201preview:GroupUser" }, { type: "azure-nextgen:apimanagement/v20200601preview:GroupUser" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(GroupUser.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a GroupUser resource.
 */
export interface GroupUserArgs {
    /**
     * Group identifier. Must be unique in the current API Management service instance.
     */
    readonly groupId: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * User identifier. Must be unique in the current API Management service instance.
     */
    readonly userId: pulumi.Input<string>;
}
