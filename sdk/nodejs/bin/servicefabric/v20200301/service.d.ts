import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The service resource.
 */
export declare class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Service;
    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Service;
    /**
     * A list that describes the correlation of the service with other services.
     */
    readonly correlationScheme: pulumi.Output<outputs.servicefabric.v20200301.ServiceCorrelationDescriptionResponse[] | undefined>;
    /**
     * Specifies the move cost for the service.
     */
    readonly defaultMoveCost: pulumi.Output<string | undefined>;
    /**
     * Azure resource etag.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * It will be deprecated in New API, resource location depends on the parent resource.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Azure resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Describes how the service is partitioned.
     */
    readonly partitionDescription: pulumi.Output<outputs.servicefabric.v20200301.PartitionSchemeDescriptionResponse | undefined>;
    /**
     * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
     */
    readonly placementConstraints: pulumi.Output<string | undefined>;
    /**
     * The current deployment or provisioning state, which only appears in the response
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Dns name used for the service. If this is specified, then the service can be accessed via its DNS name instead of service name.
     */
    readonly serviceDnsName: pulumi.Output<string | undefined>;
    /**
     * The kind of service (Stateless or Stateful).
     */
    readonly serviceKind: pulumi.Output<string>;
    /**
     * The service load metrics is given as an array of ServiceLoadMetricDescription objects.
     */
    readonly serviceLoadMetrics: pulumi.Output<outputs.servicefabric.v20200301.ServiceLoadMetricDescriptionResponse[] | undefined>;
    /**
     * The activation Mode of the service package
     */
    readonly servicePackageActivationMode: pulumi.Output<string | undefined>;
    /**
     * A list that describes the correlation of the service with other services.
     */
    readonly servicePlacementPolicies: pulumi.Output<outputs.servicefabric.v20200301.ServicePlacementPolicyDescriptionResponse[] | undefined>;
    /**
     * The name of the service type
     */
    readonly serviceTypeName: pulumi.Output<string | undefined>;
    /**
     * Azure resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Azure resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * The name of the application resource.
     */
    readonly applicationName: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    readonly clusterName: pulumi.Input<string>;
    /**
     * A list that describes the correlation of the service with other services.
     */
    readonly correlationScheme?: pulumi.Input<pulumi.Input<inputs.servicefabric.v20200301.ServiceCorrelationDescription>[]>;
    /**
     * Specifies the move cost for the service.
     */
    readonly defaultMoveCost?: pulumi.Input<string>;
    /**
     * It will be deprecated in New API, resource location depends on the parent resource.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Describes how the service is partitioned.
     */
    readonly partitionDescription?: pulumi.Input<inputs.servicefabric.v20200301.PartitionSchemeDescription>;
    /**
     * The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
     */
    readonly placementConstraints?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Dns name used for the service. If this is specified, then the service can be accessed via its DNS name instead of service name.
     */
    readonly serviceDnsName?: pulumi.Input<string>;
    /**
     * The kind of service (Stateless or Stateful).
     */
    readonly serviceKind: pulumi.Input<string>;
    /**
     * The service load metrics is given as an array of ServiceLoadMetricDescription objects.
     */
    readonly serviceLoadMetrics?: pulumi.Input<pulumi.Input<inputs.servicefabric.v20200301.ServiceLoadMetricDescription>[]>;
    /**
     * The name of the service resource in the format of {applicationName}~{serviceName}.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * The activation Mode of the service package
     */
    readonly servicePackageActivationMode?: pulumi.Input<string>;
    /**
     * A list that describes the correlation of the service with other services.
     */
    readonly servicePlacementPolicies?: pulumi.Input<pulumi.Input<inputs.servicefabric.v20200301.ServicePlacementPolicyDescription>[]>;
    /**
     * The name of the service type
     */
    readonly serviceTypeName?: pulumi.Input<string>;
    /**
     * Azure resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
