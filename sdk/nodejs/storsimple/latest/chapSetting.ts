// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Challenge-Handshake Authentication Protocol (CHAP) setting
 */
export class ChapSetting extends pulumi.CustomResource {
    /**
     * Get an existing ChapSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ChapSetting {
        return new ChapSetting(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:storsimple/latest:ChapSetting';

    /**
     * Returns true if the given object is an instance of ChapSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ChapSetting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ChapSetting.__pulumiType;
    }

    /**
     * The name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The chap password.
     */
    public readonly password!: pulumi.Output<outputs.storsimple.latest.AsymmetricEncryptedSecretResponse>;
    /**
     * The type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ChapSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ChapSettingArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.chapUserName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'chapUserName'");
            }
            if ((!args || args.deviceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'deviceName'");
            }
            if ((!args || args.managerName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'managerName'");
            }
            if ((!args || args.password === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["chapUserName"] = args ? args.chapUserName : undefined;
            inputs["deviceName"] = args ? args.deviceName : undefined;
            inputs["managerName"] = args ? args.managerName : undefined;
            inputs["password"] = args ? args.password : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["name"] = undefined /*out*/;
            inputs["password"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:storsimple/v20161001:ChapSetting" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ChapSetting.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ChapSetting resource.
 */
export interface ChapSettingArgs {
    /**
     * The chap user name.
     */
    readonly chapUserName: pulumi.Input<string>;
    /**
     * The device name.
     */
    readonly deviceName: pulumi.Input<string>;
    /**
     * The manager name
     */
    readonly managerName: pulumi.Input<string>;
    /**
     * The chap password.
     */
    readonly password: pulumi.Input<inputs.storsimple.latest.AsymmetricEncryptedSecret>;
    /**
     * The resource group name
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
