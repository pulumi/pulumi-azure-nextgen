// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Describes a Virtual Machine Scale Set.
 */
export class VirtualMachineScaleSet extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachineScaleSet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualMachineScaleSet {
        return new VirtualMachineScaleSet(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:compute/latest:VirtualMachineScaleSet';

    /**
     * Returns true if the given object is an instance of VirtualMachineScaleSet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualMachineScaleSet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualMachineScaleSet.__pulumiType;
    }

    /**
     * Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
     */
    public readonly additionalCapabilities!: pulumi.Output<outputs.compute.latest.AdditionalCapabilitiesResponse | undefined>;
    /**
     * Policy for automatic repairs.
     */
    public readonly automaticRepairsPolicy!: pulumi.Output<outputs.compute.latest.AutomaticRepairsPolicyResponse | undefined>;
    /**
     * When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
     */
    public readonly doNotRunExtensionsOnOverprovisionedVMs!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies information about the dedicated host group that the virtual machine scale set resides in. <br><br>Minimum api-version: 2020-06-01.
     */
    public readonly hostGroup!: pulumi.Output<outputs.compute.latest.SubResourceResponse | undefined>;
    /**
     * The identity of the virtual machine scale set, if configured.
     */
    public readonly identity!: pulumi.Output<outputs.compute.latest.VirtualMachineScaleSetIdentityResponse | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Specifies whether the Virtual Machine Scale Set should be overprovisioned.
     */
    public readonly overprovision!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    public readonly plan!: pulumi.Output<outputs.compute.latest.PlanResponse | undefined>;
    /**
     * Fault Domain count for each placement group.
     */
    public readonly platformFaultDomainCount!: pulumi.Output<number | undefined>;
    /**
     * The provisioning state, which only appears in the response.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01.
     */
    public readonly proximityPlacementGroup!: pulumi.Output<outputs.compute.latest.SubResourceResponse | undefined>;
    /**
     * Specifies the scale-in policy that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in.
     */
    public readonly scaleInPolicy!: pulumi.Output<outputs.compute.latest.ScaleInPolicyResponse | undefined>;
    /**
     * When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true.
     */
    public readonly singlePlacementGroup!: pulumi.Output<boolean | undefined>;
    /**
     * The virtual machine scale set sku.
     */
    public readonly sku!: pulumi.Output<outputs.compute.latest.SkuResponse | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Specifies the ID which uniquely identifies a Virtual Machine Scale Set.
     */
    public /*out*/ readonly uniqueId!: pulumi.Output<string>;
    /**
     * The upgrade policy.
     */
    public readonly upgradePolicy!: pulumi.Output<outputs.compute.latest.UpgradePolicyResponse | undefined>;
    /**
     * The virtual machine profile.
     */
    public readonly virtualMachineProfile!: pulumi.Output<outputs.compute.latest.VirtualMachineScaleSetVMProfileResponse | undefined>;
    /**
     * Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage.
     */
    public readonly zoneBalance!: pulumi.Output<boolean | undefined>;
    /**
     * The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set
     */
    public readonly zones!: pulumi.Output<string[] | undefined>;

    /**
     * Create a VirtualMachineScaleSet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineScaleSetArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.vmScaleSetName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'vmScaleSetName'");
            }
            inputs["additionalCapabilities"] = args ? args.additionalCapabilities : undefined;
            inputs["automaticRepairsPolicy"] = args ? args.automaticRepairsPolicy : undefined;
            inputs["doNotRunExtensionsOnOverprovisionedVMs"] = args ? args.doNotRunExtensionsOnOverprovisionedVMs : undefined;
            inputs["hostGroup"] = args ? args.hostGroup : undefined;
            inputs["identity"] = args ? args.identity : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["overprovision"] = args ? args.overprovision : undefined;
            inputs["plan"] = args ? args.plan : undefined;
            inputs["platformFaultDomainCount"] = args ? args.platformFaultDomainCount : undefined;
            inputs["proximityPlacementGroup"] = args ? args.proximityPlacementGroup : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["scaleInPolicy"] = args ? args.scaleInPolicy : undefined;
            inputs["singlePlacementGroup"] = args ? args.singlePlacementGroup : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["upgradePolicy"] = args ? args.upgradePolicy : undefined;
            inputs["virtualMachineProfile"] = args ? args.virtualMachineProfile : undefined;
            inputs["vmScaleSetName"] = args ? args.vmScaleSetName : undefined;
            inputs["zoneBalance"] = args ? args.zoneBalance : undefined;
            inputs["zones"] = args ? args.zones : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["uniqueId"] = undefined /*out*/;
        } else {
            inputs["additionalCapabilities"] = undefined /*out*/;
            inputs["automaticRepairsPolicy"] = undefined /*out*/;
            inputs["doNotRunExtensionsOnOverprovisionedVMs"] = undefined /*out*/;
            inputs["hostGroup"] = undefined /*out*/;
            inputs["identity"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["overprovision"] = undefined /*out*/;
            inputs["plan"] = undefined /*out*/;
            inputs["platformFaultDomainCount"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["proximityPlacementGroup"] = undefined /*out*/;
            inputs["scaleInPolicy"] = undefined /*out*/;
            inputs["singlePlacementGroup"] = undefined /*out*/;
            inputs["sku"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["uniqueId"] = undefined /*out*/;
            inputs["upgradePolicy"] = undefined /*out*/;
            inputs["virtualMachineProfile"] = undefined /*out*/;
            inputs["zoneBalance"] = undefined /*out*/;
            inputs["zones"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:compute/v20150615:VirtualMachineScaleSet" }, { type: "azure-nextgen:compute/v20160330:VirtualMachineScaleSet" }, { type: "azure-nextgen:compute/v20160430preview:VirtualMachineScaleSet" }, { type: "azure-nextgen:compute/v20170330:VirtualMachineScaleSet" }, { type: "azure-nextgen:compute/v20171201:VirtualMachineScaleSet" }, { type: "azure-nextgen:compute/v20180401:VirtualMachineScaleSet" }, { type: "azure-nextgen:compute/v20180601:VirtualMachineScaleSet" }, { type: "azure-nextgen:compute/v20181001:VirtualMachineScaleSet" }, { type: "azure-nextgen:compute/v20190301:VirtualMachineScaleSet" }, { type: "azure-nextgen:compute/v20190701:VirtualMachineScaleSet" }, { type: "azure-nextgen:compute/v20191201:VirtualMachineScaleSet" }, { type: "azure-nextgen:compute/v20200601:VirtualMachineScaleSet" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(VirtualMachineScaleSet.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualMachineScaleSet resource.
 */
export interface VirtualMachineScaleSetArgs {
    /**
     * Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
     */
    readonly additionalCapabilities?: pulumi.Input<inputs.compute.latest.AdditionalCapabilities>;
    /**
     * Policy for automatic repairs.
     */
    readonly automaticRepairsPolicy?: pulumi.Input<inputs.compute.latest.AutomaticRepairsPolicy>;
    /**
     * When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
     */
    readonly doNotRunExtensionsOnOverprovisionedVMs?: pulumi.Input<boolean>;
    /**
     * Specifies information about the dedicated host group that the virtual machine scale set resides in. <br><br>Minimum api-version: 2020-06-01.
     */
    readonly hostGroup?: pulumi.Input<inputs.compute.latest.SubResource>;
    /**
     * The identity of the virtual machine scale set, if configured.
     */
    readonly identity?: pulumi.Input<inputs.compute.latest.VirtualMachineScaleSetIdentity>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * Specifies whether the Virtual Machine Scale Set should be overprovisioned.
     */
    readonly overprovision?: pulumi.Input<boolean>;
    /**
     * Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
     */
    readonly plan?: pulumi.Input<inputs.compute.latest.Plan>;
    /**
     * Fault Domain count for each placement group.
     */
    readonly platformFaultDomainCount?: pulumi.Input<number>;
    /**
     * Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01.
     */
    readonly proximityPlacementGroup?: pulumi.Input<inputs.compute.latest.SubResource>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the scale-in policy that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in.
     */
    readonly scaleInPolicy?: pulumi.Input<inputs.compute.latest.ScaleInPolicy>;
    /**
     * When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true.
     */
    readonly singlePlacementGroup?: pulumi.Input<boolean>;
    /**
     * The virtual machine scale set sku.
     */
    readonly sku?: pulumi.Input<inputs.compute.latest.Sku>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The upgrade policy.
     */
    readonly upgradePolicy?: pulumi.Input<inputs.compute.latest.UpgradePolicy>;
    /**
     * The virtual machine profile.
     */
    readonly virtualMachineProfile?: pulumi.Input<inputs.compute.latest.VirtualMachineScaleSetVMProfile>;
    /**
     * The name of the VM scale set to create or update.
     */
    readonly vmScaleSetName: pulumi.Input<string>;
    /**
     * Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage.
     */
    readonly zoneBalance?: pulumi.Input<boolean>;
    /**
     * The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set
     */
    readonly zones?: pulumi.Input<pulumi.Input<string>[]>;
}
