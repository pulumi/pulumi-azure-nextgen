// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupStorageAccountCredential(ctx *pulumi.Context, args *LookupStorageAccountCredentialArgs, opts ...pulumi.InvokeOption) (*LookupStorageAccountCredentialResult, error) {
	var rv LookupStorageAccountCredentialResult
	err := ctx.Invoke("azure-nextgen:storsimple/latest:getStorageAccountCredential", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupStorageAccountCredentialArgs struct {
	// The manager name
	ManagerName string `pulumi:"managerName"`
	// The resource group name
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of storage account credential to be fetched.
	StorageAccountCredentialName string `pulumi:"storageAccountCredentialName"`
}

// The storage account credential.
type LookupStorageAccountCredentialResult struct {
	// The details of the storage account password.
	AccessKey *AsymmetricEncryptedSecretResponse `pulumi:"accessKey"`
	// The storage endpoint
	EndPoint string `pulumi:"endPoint"`
	// The path ID that uniquely identifies the object.
	Id string `pulumi:"id"`
	// The Kind of the object. Currently only Series8000 is supported
	Kind *string `pulumi:"kind"`
	// The name of the object.
	Name string `pulumi:"name"`
	// Signifies whether SSL needs to be enabled or not.
	SslStatus string `pulumi:"sslStatus"`
	// The hierarchical type of the object.
	Type string `pulumi:"type"`
	// The count of volumes using this storage account credential.
	VolumesCount int `pulumi:"volumesCount"`
}
