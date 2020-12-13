// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupStorageDomain(ctx *pulumi.Context, args *LookupStorageDomainArgs, opts ...pulumi.InvokeOption) (*LookupStorageDomainResult, error) {
	var rv LookupStorageDomainResult
	err := ctx.Invoke("azure-nextgen:storsimple/latest:getStorageDomain", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupStorageDomainArgs struct {
	// The manager name
	ManagerName string `pulumi:"managerName"`
	// The resource group name
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The storage domain name.
	StorageDomainName string `pulumi:"storageDomainName"`
}

// The storage domain.
type LookupStorageDomainResult struct {
	// The encryption key used to encrypt the data. This is a user secret.
	EncryptionKey *AsymmetricEncryptedSecretResponse `pulumi:"encryptionKey"`
	// The encryption status "Enabled | Disabled".
	EncryptionStatus string `pulumi:"encryptionStatus"`
	// The identifier.
	Id string `pulumi:"id"`
	// The name.
	Name string `pulumi:"name"`
	// The storage account credentials.
	StorageAccountCredentialIds []string `pulumi:"storageAccountCredentialIds"`
	// The type.
	Type string `pulumi:"type"`
}
