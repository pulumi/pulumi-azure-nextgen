// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170301preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupSqlVirtualMachineGroup(ctx *pulumi.Context, args *LookupSqlVirtualMachineGroupArgs, opts ...pulumi.InvokeOption) (*LookupSqlVirtualMachineGroupResult, error) {
	var rv LookupSqlVirtualMachineGroupResult
	err := ctx.Invoke("azure-nextgen:sqlvirtualmachine/v20170301preview:getSqlVirtualMachineGroup", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupSqlVirtualMachineGroupArgs struct {
	// Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the SQL virtual machine group.
	SqlVirtualMachineGroupName string `pulumi:"sqlVirtualMachineGroupName"`
}

// A SQL virtual machine group.
type LookupSqlVirtualMachineGroupResult struct {
	// Cluster type.
	ClusterConfiguration string `pulumi:"clusterConfiguration"`
	// Type of cluster manager: Windows Server Failover Cluster (WSFC), implied by the scale type of the group and the OS type.
	ClusterManagerType string `pulumi:"clusterManagerType"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource location.
	Location string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// Provisioning state to track the async operation status.
	ProvisioningState string `pulumi:"provisioningState"`
	// Scale type.
	ScaleType string `pulumi:"scaleType"`
	// SQL image offer. Examples may include SQL2016-WS2016, SQL2017-WS2016.
	SqlImageOffer *string `pulumi:"sqlImageOffer"`
	// SQL image sku.
	SqlImageSku *string `pulumi:"sqlImageSku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
	// Cluster Active Directory domain profile.
	WsfcDomainProfile *WsfcDomainProfileResponse `pulumi:"wsfcDomainProfile"`
}
