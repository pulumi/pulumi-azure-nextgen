// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191101preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupService(ctx *pulumi.Context, args *LookupServiceArgs, opts ...pulumi.InvokeOption) (*LookupServiceResult, error) {
	var rv LookupServiceResult
	err := ctx.Invoke("azure-nextgen:servicefabric/v20191101preview:getService", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupServiceArgs struct {
	// The name of the application resource.
	ApplicationName string `pulumi:"applicationName"`
	// The name of the cluster resource.
	ClusterName string `pulumi:"clusterName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the service resource in the format of {applicationName}~{serviceName}.
	ServiceName string `pulumi:"serviceName"`
}

// The service resource.
type LookupServiceResult struct {
	// A list that describes the correlation of the service with other services.
	CorrelationScheme []ServiceCorrelationDescriptionResponse `pulumi:"correlationScheme"`
	// Specifies the move cost for the service.
	DefaultMoveCost *string `pulumi:"defaultMoveCost"`
	// Azure resource etag.
	Etag string `pulumi:"etag"`
	// Azure resource identifier.
	Id string `pulumi:"id"`
	// It will be deprecated in New API, resource location depends on the parent resource.
	Location *string `pulumi:"location"`
	// Azure resource name.
	Name string `pulumi:"name"`
	// Describes how the service is partitioned.
	PartitionDescription interface{} `pulumi:"partitionDescription"`
	// The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
	PlacementConstraints *string `pulumi:"placementConstraints"`
	// The current deployment or provisioning state, which only appears in the response
	ProvisioningState string `pulumi:"provisioningState"`
	// Dns name used for the service. If this is specified, then the service can be accessed via its DNS name instead of service name.
	ServiceDnsName *string `pulumi:"serviceDnsName"`
	// The kind of service (Stateless or Stateful).
	ServiceKind string `pulumi:"serviceKind"`
	// The service load metrics is given as an array of ServiceLoadMetricDescription objects.
	ServiceLoadMetrics []ServiceLoadMetricDescriptionResponse `pulumi:"serviceLoadMetrics"`
	// The activation Mode of the service package
	ServicePackageActivationMode *string `pulumi:"servicePackageActivationMode"`
	// A list that describes the correlation of the service with other services.
	ServicePlacementPolicies []ServicePlacementPolicyDescriptionResponse `pulumi:"servicePlacementPolicies"`
	// The name of the service type
	ServiceTypeName *string `pulumi:"serviceTypeName"`
	// Azure resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Azure resource type.
	Type string `pulumi:"type"`
}
